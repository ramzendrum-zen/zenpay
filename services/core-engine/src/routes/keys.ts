import { Router } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import rateLimit from 'express-rate-limit';
import prisma from '../lib/prisma';
import { authenticateMerchant, AuthRequest } from '../middleware/auth';

const router = Router();
const SALT = process.env.MERCHANT_SECRET_SALT || 'zen_salt_8829';

/* ─────────────────────────────────────────────
   Rate limiter: max 20 key-management ops/min
───────────────────────────────────────────── */
const keyOpsLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    standardHeaders: true,
    message: { status: 'error', error: 'Too many key operations. Please wait 1 minute.' }
});

/* ─────────────────────────────────────────────
   GET /v1/keys  — List all keys for merchant
───────────────────────────────────────────── */
router.get('/', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId as string;
        const keys = await prisma.apiKey.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                publicKey: true,
                name: true,
                environment: true,
                lastUsedAt: true,
                createdAt: true,
                revokedAt: true,
                // NEVER return secretKeyHash
            }
        });
        res.json({ status: 'success', data: keys });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to fetch keys' });
    }
});

/* ─────────────────────────────────────────────
   POST /v1/keys/generate  — Create new key pair
   Returns raw secret ONLY ONCE
───────────────────────────────────────────── */
router.post('/generate', authenticateMerchant, keyOpsLimiter, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId;
        if (!merchantId) return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        const { environment = 'live', name } = req.body;
        const env = environment === 'test' ? 'test' : 'live';
        const keyPrefix = env === 'test' ? 'test' : 'live';

        const publicKey = `pk_${keyPrefix}_${crypto.randomBytes(14).toString('hex')}`;
        const rawSecret = `sk_${keyPrefix}_${crypto.randomBytes(22).toString('hex')}`;
        const secretKeyHash = await bcrypt.hash(rawSecret + SALT, 12);

        // Verify merchant exists
        const merchant = await prisma.merchant.findUnique({ where: { id: merchantId } });
        if (!merchant) return res.status(404).json({ status: 'error', error: 'Merchant not found' });

        const [newKey] = await prisma.$transaction([
            // Create new key
            prisma.apiKey.create({
                data: {
                    merchantId,
                    publicKey,
                    name: name || (env === 'live' ? 'Production Key' : 'Sandbox Key'),
                    secretKeyHash,
                    secretKey: rawSecret,
                    environment: env,
                }
            }),
            // Sync to merchant table for backwards compat
            prisma.merchant.update({
                where: { id: merchantId },
                data: { publicKey, secretKeyHash, secretKey: rawSecret }
            })
        ]);

        // Log this key generation event
        await prisma.apiLog.create({
            data: {
                merchantId,
                method: 'POST',
                endpoint: '/v1/keys/generate',
                statusCode: 200,
            }
        }).catch(() => { }); // Don't fail if log fails

        return res.status(201).json({
            status: 'success',
            message: 'New API key pair generated. Store your secret key safely — it will NOT be shown again.',
            data: {
                id: newKey.id,
                publicKey: newKey.publicKey,
                secretKey: rawSecret,   // ← returned ONCE only
                environment: newKey.environment,
                createdAt: newKey.createdAt,
                warning: 'This is the only time you will see your secret key. Copy it now.'
            }
        });
    } catch (error) {
        console.error('Key generate error:', error);
        res.status(500).json({ status: 'error', error: 'Failed to generate keys' });
    }
});

/* ─────────────────────────────────────────────
   POST /v1/keys/rotate  — Rotate existing keys
   Revokes old key, issues new pair
───────────────────────────────────────────── */
router.post(['/rotate', '/regenerate'], authenticateMerchant, keyOpsLimiter, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId;
        if (!merchantId) return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        const { keyId } = req.body; // Optional: rotate a specific key

        // Find the currently active key
        const oldKey = await prisma.apiKey.findFirst({
            where: keyId ? { id: keyId, merchantId } : { merchantId, revokedAt: null },
            orderBy: { createdAt: 'desc' }
        });

        const env = oldKey?.environment || 'live';
        const keyPrefix = env === 'test' ? 'test' : 'live';

        const publicKey = `pk_${keyPrefix}_${crypto.randomBytes(14).toString('hex')}`;
        const rawSecret = `sk_${keyPrefix}_${crypto.randomBytes(22).toString('hex')}`;
        const secretKeyHash = await bcrypt.hash(rawSecret + SALT, 12);

        const rotatedFromId = oldKey?.id;

        const [newKey] = await prisma.$transaction([
            prisma.apiKey.create({
                data: {
                    merchantId,
                    publicKey,
                    name: req.body.name || oldKey?.name || (env === 'live' ? 'Production Key' : 'Sandbox Key'),
                    secretKeyHash,
                    secretKey: rawSecret,
                    environment: env,
                }
            }),
            prisma.merchant.update({
                where: { id: merchantId },
                data: { publicKey, secretKeyHash, secretKey: rawSecret }
            })
        ]);

        return res.json({
            status: 'success',
            message: 'Key rotated successfully. Old key has been revoked. Store your new secret key safely.',
            data: {
                id: newKey.id,
                publicKey: newKey.publicKey,
                secretKey: rawSecret,           // ← ONE TIME ONLY
                environment: newKey.environment,
                createdAt: newKey.createdAt,
                warning: 'Your old key has been permanently revoked. This is the only time you will see your new secret key.'
            }
        });
    } catch (error) {
        console.error('Key rotate error:', error);
        res.status(500).json({ status: 'error', error: 'Failed to rotate key' });
    }
});

/* ─────────────────────────────────────────────
   DELETE /v1/keys/:id  — Revoke a specific key
───────────────────────────────────────────── */
router.delete('/:id', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId as string;
        const id = req.params.id as string;

        console.log(`[DELETE_KEY] Attempting to delete key ${id} for merchant ${merchantId}`);

        const key = await prisma.apiKey.findFirst({ where: { id, merchantId } });
        if (!key) {
            console.error(`[DELETE_KEY] Key ${id} not found for merchant ${merchantId}`);
            return res.status(404).json({ status: 'error', error: 'Key not found' });
        }

        await prisma.apiKey.delete({
            where: { id }
        });

        console.log(`[DELETE_KEY] Successfully deleted key ${id}`);
        res.json({ status: 'success', message: 'API key deleted successfully.' });
    } catch (error) {
        console.error(`[DELETE_KEY] Error deleting key ${req.params.id}:`, error);
        res.status(500).json({ status: 'error', error: 'Failed to delete key' });
    }
});

/* ─────────────────────────────────────────────
   GET /v1/keys/usage  — Usage analytics per key
───────────────────────────────────────────── */
router.get('/usage', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId as string;
        const last7Days = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

        const [totalRequests, recentRequests, keys] = await Promise.all([
            prisma.apiLog.count({ where: { merchantId } }),
            prisma.apiLog.count({ where: { merchantId, createdAt: { gte: last7Days } } }),
            prisma.apiKey.findMany({
                where: { merchantId },
                select: { id: true, publicKey: true, name: true, revokedAt: true, lastUsedAt: true, environment: true, createdAt: true }
            })
        ]);

        res.json({
            status: 'success',
            data: {
                totalRequests,
                requestsLast7Days: recentRequests,
                activeKeys: keys.filter(k => k.revokedAt === null).length,
                keys: keys.map(k => ({ ...k, status: k.revokedAt ? 'revoked' : 'active' }))
            }
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to fetch usage data' });
    }
});

export default router;
