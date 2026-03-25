import { Router, Response } from 'express';
import prisma from '../lib/prisma';
import { getIdempotentResponse, saveIdempotentResponse } from '../lib/idempotency';
import { authenticateMerchant, AuthRequest } from '../middleware/auth';
import { OrderStatus } from '@zenpay/shared-types';

const router = Router();

/**
 * POST /v1/orders
 * Creates a new payment order for a merchant.
 * Requires Bearer sk_... (Secret Key) authentication.
 * Requires Idempotency-Key header.
 */
router.post('/', authenticateMerchant, async (req: AuthRequest, res: Response) => {
    const idempotencyKey = req.headers['idempotency-key'] as string;
    const merchantId = req.merchantId;

    if (!merchantId) {
        return res.status(401).json({ status: 'error', error: 'Unauthorized: Merchant identification failed' });
    }

    if (!idempotencyKey) {
        console.warn(`[Orders] Missing Idempotency-Key header for merchant ${merchantId}. Generating fallback...`);
    }

    const effectiveKey = idempotencyKey || `auto_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
        // 1. Check if we already processed this request
        const cachedResponse = (idempotencyKey) ? await getIdempotentResponse(idempotencyKey) : null;
        if (cachedResponse) {
            return res.json(cachedResponse);
        }

        const { amount, currency = 'INR', receipt } = req.body;

        if (!amount) {
            return res.status(400).json({ status: 'error', error: 'amount is required' });
        }

        // 3. Create Order
        const order = await prisma.order.create({
            data: {
                merchantId: merchantId as string,
                apiKeyId: req.apiKeyId ?? null,
                amountPaise: amount,
                currency,
                receipt,
                idempotencyKey: effectiveKey,
                status: OrderStatus.PENDING
            } as any
        });

        const successResponse = {
            status: 'success',
            data: {
                id: order.id,
                amount: order.amountPaise,
                currency: order.currency,
                status: order.status,
                created_at: order.createdAt
            }
        };

        // 4. Save for idempotency
        if (idempotencyKey) {
            await saveIdempotentResponse(idempotencyKey, successResponse);
        }

        return res.json(successResponse);
    } catch (error: any) {
        if (error.code === 'P2002' && effectiveKey) { // Unique constraint violation (race condition)
            const existingOrder = await prisma.order.findUnique({
                where: { idempotencyKey: effectiveKey }
            });
            if (existingOrder) {
                return res.json({
                    status: 'success',
                    data: {
                        id: existingOrder.id,
                        amount: existingOrder.amountPaise,
                        currency: existingOrder.currency,
                        status: existingOrder.status,
                        created_at: existingOrder.createdAt
                    }
                });
            }
        }
        console.error('Order creation error:', error);
        return res.status(500).json({ status: 'error', error: 'Internal Server Error' });
    }
});

export default router;
