import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import { AuthRequest } from './auth';
import prisma from '../lib/prisma';

export const idempotencyMiddleware = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const idempotencyKey = req.headers['idempotency-key'] as string;
    const merchantId = req.merchantId;

    if (!idempotencyKey || !merchantId || !['POST', 'PUT', 'PATCH'].includes(req.method)) {
        return next();
    }

    try {
        const payloadHash = crypto.createHash('sha256').update(JSON.stringify(req.body)).digest('hex');

        // 1. Check if key exists
        const existingRecord = await prisma.idempotencyKey.findUnique({
            where: {
                merchantId_key: {
                    merchantId,
                    key: idempotencyKey
                }
            }
        });

        if (existingRecord) {
            // Priority 2: Safe Replay Hash validation
            if (existingRecord.requestHash !== payloadHash) {
                return res.status(422).json({ status: 'error', error: 'Payload mismatch for idempotency key' });
            }

            // Already processed -> return stored body
            if (existingRecord.status === 'PROCESSED' && existingRecord.responseBody) {
                res.setHeader('X-Idempotency-Replayed', 'true');
                return res.status(200).json(JSON.parse(existingRecord.responseBody));
            } else {
                return res.status(409).json({ status: 'error', error: 'Concurrent request is already processing with this idempotency key.' });
            }
        }

        // 2. Create an "IN_PROGRESS" key to lock it
        await prisma.idempotencyKey.create({
            data: {
                key: idempotencyKey,
                merchantId,
                status: 'IN_PROGRESS',
                requestHash: payloadHash
            }
        });

        // 3. Intercept json() to save response body
        const originalJson = res.json.bind(res);
        res.json = (body: any) => {
            if (res.statusCode < 500) {
                // Update idempotency record in background
                prisma.idempotencyKey.update({
                    where: {
                        merchantId_key: {
                            merchantId,
                            key: idempotencyKey
                        }
                    },
                    data: {
                        status: 'PROCESSED',
                        responseBody: JSON.stringify(body)
                    }
                }).catch(console.error);
            } else {
                // Remove failed ones to allow retry
                prisma.idempotencyKey.delete({
                    where: {
                        merchantId_key: {
                            merchantId,
                            key: idempotencyKey
                        }
                    }
                }).catch(console.error);
            }
            return originalJson(body);
        };

        next();
    } catch (err: any) {
        if (err.code === 'P2002') {
            // Unique constraint failed = race condition
            return res.status(409).json({ status: 'error', error: 'Concurrent request with same idempotency key' });
        }
        next(err);
    }
};
