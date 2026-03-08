import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'zen_jwt_secret_9921';
const SALT = process.env.MERCHANT_SECRET_SALT || 'zen_salt_8829';

export interface AuthRequest extends Request {
    merchantId?: string;
    userId?: string;
    email?: string;
    apiKeyId?: string;
}

export const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ status: 'error', error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as any;
        req.email = decoded.email;

        // 1. Direct User Token
        if (decoded.userId) {
            req.userId = decoded.userId;
        }
        // 2. Merchant Token - Fallback to linked User
        else if (decoded.merchantId) {
            req.merchantId = decoded.merchantId;
            // Case-insensitive search: find by email exactly as in token, then try lowercase
            let user = await prisma.user.findUnique({ where: { email: decoded.email } });
            if (!user) {
                user = await prisma.user.findUnique({ where: { email: decoded.email.toLowerCase() } });
            }

            if (user) {
                req.userId = user.id;
            } else {
                // Last ditch effort: if we have a valid merchant but no user, 
                // we'll try one more time to find them to avoid 401s in Personal Wallet.
                // In a production env, we'd log this mismatch.
                const merchant = await prisma.merchant.findUnique({ where: { id: decoded.merchantId } });
                if (merchant) {
                    const linkedUser = await prisma.user.findFirst({
                        where: { email: { equals: merchant.email, mode: 'insensitive' } }
                    });
                    if (linkedUser) {
                        req.userId = linkedUser.id;
                    }
                }
            }
        }

        next();
    } catch (error) {
        return res.status(401).json({ status: 'error', error: 'Unauthorized: Invalid token' });
    }
};

export const authenticateMerchant = async (req: AuthRequest, res: Response, next: NextFunction) => {
    // ... existing logic ...
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ status: 'error', error: 'Unauthorized: No token provided' });
    }

    const token = authHeader.split(' ')[1];

    // 1. API Key Authentication (Internal backend-to-backend calls)
    if (token.startsWith('sk_')) {
        try {
            // Find all active API keys. In production, we'd use a prefix to find the merchant faster.
            const keys = await prisma.apiKey.findMany({
                where: { revokedAt: null },
            });

            for (const k of keys) {
                const isMatch = await bcrypt.compare(token + SALT, k.secretKeyHash);
                if (isMatch) {
                    req.merchantId = k.merchantId;
                    req.apiKeyId = k.id;

                    // Update last used asynchronously
                    prisma.apiKey.update({
                        where: { id: k.id },
                        data: { lastUsedAt: new Date() }
                    }).catch(err => console.error('Failed to update lastUsedAt:', err));

                    return next();
                }
            }

            // Fallback: Check legacy secretKeyHash on Merchant model if any
            const merchants = await prisma.merchant.findMany();
            for (const m of merchants) {
                const isMatch = await bcrypt.compare(token + SALT, m.secretKeyHash);
                if (isMatch) {
                    req.merchantId = m.id;
                    return next();
                }
            }

            return res.status(401).json({ status: 'error', error: 'Unauthorized: Invalid Secret Key' });
        } catch (error) {
            return res.status(500).json({ status: 'error', error: 'Auth check failed' });
        }
    }

    // 2. JWT Authentication (Dashboard)
    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { merchantId: string; email: string };
        req.merchantId = decoded.merchantId;
        req.email = decoded.email;
        next();
    } catch (error) {
        return res.status(401).json({ status: 'error', error: 'Unauthorized: Invalid token' });
    }
};
