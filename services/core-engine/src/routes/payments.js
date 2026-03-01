import { Router } from 'express';
import prisma from '../lib/prisma';
import { z } from 'zod';
import { PaymentStatus, OrderStatus, LedgerType, ReferenceType } from '@zenwallet/shared-types';
import { generateSignature } from '@zenwallet/utils';
const router = Router();
const PaymentRequestSchema = z.object({
    orderId: z.string(),
    userId: z.string(),
    method: z.enum(['card', 'upi']),
    cardDetails: z.object({
        number: z.string().optional(),
        expiry: z.string().optional(),
        cvv: z.string().optional()
    }).optional(),
    upiId: z.string().optional()
});
/**
 * Helper to calculate user balance from ledger
 */
async function getUserBalance(userId) {
    const ledgerEntries = await prisma.ledgerEntries.findMany({
        where: { userId }
    });
    return ledgerEntries.reduce((acc, entry) => {
        return entry.type === LedgerType.CREDIT ? acc + entry.amountPaise : acc - entry.amountPaise;
    }, 0);
}
/**
 * POST /v1/payments/card
 */
router.post('/card', async (req, res) => {
    try {
        const body = PaymentRequestSchema.parse({ ...req.body, method: 'card' });
        // 1. Start Transaction
        const result = await prisma.$transaction(async (tx) => {
            // 2. Fetch Order
            const order = await tx.order.findUnique({
                where: { id: body.orderId },
                include: { merchant: true }
            });
            if (!order)
                throw new Error('Order not found');
            if (order.status !== OrderStatus.PENDING)
                throw new Error('Order is not in pending state');
            // 3. Simple Risk Check (Simulated)
            const riskScore = Math.random() * 10;
            if (riskScore > 80)
                throw new Error('Transaction rejected by risk engine');
            // 4. Check User Balance
            const ledgerEntries = await tx.ledgerEntries.findMany({ where: { userId: body.userId } });
            const balance = ledgerEntries.reduce((acc, e) => e.type === LedgerType.CREDIT ? acc + e.amountPaise : acc - e.amountPaise, 0);
            if (balance < order.amountPaise)
                throw new Error('Insufficient balance');
            // 5. Create Payment Record
            const payment = await tx.payment.create({
                data: {
                    orderId: order.id,
                    userId: body.userId,
                    method: 'card',
                    status: PaymentStatus.CAPTURED,
                    amountPaise: order.amountPaise,
                    riskScore,
                    signature: generateSignature(`${order.id}|${order.amountPaise}|CAPTURED`, process.env.WEBHOOK_SIGNING_SECRET)
                }
            });
            // 6. Update Order Status
            await tx.order.update({
                where: { id: order.id },
                data: { status: OrderStatus.PAID }
            });
            // 7. Create Ledger Entry (DEBIT user)
            await tx.ledgerEntries.create({
                data: {
                    userId: body.userId,
                    type: LedgerType.DEBIT,
                    amountPaise: order.amountPaise,
                    referenceType: ReferenceType.PAYMENT,
                    referenceId: payment.id,
                    balanceAfter: balance - order.amountPaise
                }
            });
            return { payment, order };
        });
        res.json({
            status: 'success',
            data: {
                payment_id: result.payment.id,
                order_id: result.order.id,
                amount: result.payment.amountPaise,
                signature: result.payment.signature
            }
        });
    }
    catch (error) {
        console.error('Payment Error:', error.message);
        res.status(400).json({ status: 'error', error: error.message });
    }
});
/**
 * POST /v1/payments/upi
 */
router.post('/upi', async (req, res) => {
    try {
        const body = PaymentRequestSchema.parse({ ...req.body, method: 'upi' });
        const result = await prisma.$transaction(async (tx) => {
            const order = await tx.order.findUnique({
                where: { id: body.orderId },
                include: { merchant: true }
            });
            if (!order)
                throw new Error('Order not found');
            const ledgerEntries = await tx.ledgerEntries.findMany({ where: { userId: body.userId } });
            const balance = ledgerEntries.reduce((acc, e) => e.type === LedgerType.CREDIT ? acc + e.amountPaise : acc - e.amountPaise, 0);
            if (balance < order.amountPaise)
                throw new Error('Insufficient balance');
            const payment = await tx.payment.create({
                data: {
                    orderId: order.id,
                    userId: body.userId,
                    method: 'upi',
                    status: PaymentStatus.CAPTURED,
                    amountPaise: order.amountPaise,
                    signature: generateSignature(`${order.id}|${order.amountPaise}|CAPTURED`, process.env.WEBHOOK_SIGNING_SECRET)
                }
            });
            await tx.order.update({
                where: { id: order.id },
                data: { status: OrderStatus.PAID }
            });
            await tx.ledgerEntries.create({
                data: {
                    userId: body.userId,
                    type: LedgerType.DEBIT,
                    amountPaise: order.amountPaise,
                    referenceType: ReferenceType.PAYMENT,
                    referenceId: payment.id,
                    balanceAfter: balance - order.amountPaise
                }
            });
            return { payment, order };
        });
        res.json({
            status: 'success',
            data: {
                payment_id: result.payment.id,
                signature: result.payment.signature
            }
        });
    }
    catch (error) {
        res.status(400).json({ status: 'error', error: error.message });
    }
});
export default router;
//# sourceMappingURL=payments.js.map