import { Router } from 'express';
import prisma from '../lib/prisma';
import { getIdempotentResponse, saveIdempotentResponse } from '../lib/idempotency';
import { OrderStatus } from '@zenwallet/shared-types';
const router = Router();
/**
 * POST /v1/orders
 * Creates a new payment order for a merchant.
 * Requires Idempotency-Key header.
 */
router.post('/', async (req, res) => {
    const idempotencyKey = req.headers['idempotency-key'];
    if (!idempotencyKey) {
        return res.status(400).json({
            status: 'error',
            error: 'Idempotency-Key header is required'
        });
    }
    try {
        // 1. Check if we already processed this request
        const cachedResponse = await getIdempotentResponse(idempotencyKey);
        if (cachedResponse) {
            return res.json(cachedResponse);
        }
        const { amount, currency = 'INR', receipt, publicKey } = req.body;
        if (!amount || !publicKey) {
            return res.status(400).json({ status: 'error', error: 'amount and publicKey are required' });
        }
        // 2. Verify Merchant
        const merchant = await prisma.merchant.findUnique({
            where: { publicKey }
        });
        if (!merchant) {
            return res.status(401).json({ status: 'error', error: 'Invalid API Key' });
        }
        // 3. Create Order
        const order = await prisma.order.create({
            data: {
                merchantId: merchant.id,
                amountPaise: amount,
                currency,
                receipt,
                idempotencyKey,
                status: OrderStatus.PENDING
            }
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
        await saveIdempotentResponse(idempotencyKey, successResponse);
        return res.json(successResponse);
    }
    catch (error) {
        if (error.code === 'P2002') { // Unique constraint violation (race condition)
            const existingOrder = await prisma.order.findUnique({
                where: { idempotencyKey }
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
//# sourceMappingURL=orders.js.map