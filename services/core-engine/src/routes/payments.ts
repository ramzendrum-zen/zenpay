import { Router } from 'express';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import prisma, { withTransactionRetry, PaymentStatus, OrderStatus } from '../lib/prisma';
import { z } from 'zod';
import { analyzeTransaction } from '../services/risk-engine';
import { dispatchWebhook } from '../services/webhook-service';
import { emitToUser, emitToMerchant } from '../lib/socket';

const router = Router();

// Zod schemas
const PaymentRequestSchema = z.object({
    orderId: z.string(),
    userId: z.string(),
    method: z.enum(['card', 'upi']),
    cardId: z.string().optional(),
    cvv: z.string().optional(),
    upiId: z.string().optional(),
    upiPin: z.string().optional()
});

const RefundRequestSchema = z.object({
    amountPaise: z.number().int().positive(),
    reason: z.string().optional()
});

// Priority 3: Strict State Machine Transition Logic
const ALLOWED_TRANSITIONS: Record<string, string[]> = {
    CREATED: ['AUTHORIZED', 'FAILED'],
    AUTHORIZED: ['CAPTURED', 'FAILED', 'REVERSED'],
    CAPTURED: ['REFUNDED', 'CHARGEBACK'],
    REFUNDED: [],
    FAILED: [],
    REVERSED: [],
    CHARGEBACK: []
};

async function transitionState(tx: any, paymentId: string, fromStatus: string, toStatus: string, actor: string, reason?: string) {
    if (!ALLOWED_TRANSITIONS[fromStatus]) throw new Error(`Unknown source status: ${fromStatus}`);
    if (!ALLOWED_TRANSITIONS[fromStatus].includes(toStatus)) {
        throw new Error(`Invalid State Transition: Cannot transition from ${fromStatus} to ${toStatus}`);
    }

    // Prisma interactive transactions MUST be executed sequentially. Parallel queries on the same tx object or ID will fail.
    await tx.payment.update({
        where: { id: paymentId },
        data: { status: toStatus as PaymentStatus, ...((toStatus === 'FAILED' && reason) ? { failedReason: reason } : {}) }
    });

    await tx.paymentStateTransition.create({
        data: { paymentId, fromStatus, toStatus, actor, reason }
    });
}


/**
 * GET /v1/payments/order/:orderId
 * Network failure safety: Verify if an order was successfully captured
 */
router.get('/order/:orderId', async (req, res) => {
    try {
        const order = await prisma.order.findUnique({
            where: { id: req.params.orderId },
            include: { payments: { where: { status: 'CAPTURED' } } }
        });
        if (!order) return res.status(404).json({ status: 'error', error: 'Order not found' });

        if (order.status === 'PAID' && order.payments.length > 0) {
            const p = order.payments[0];
            return res.json({ status: 'success', data: { status: 'CAPTURED', payment_id: p.id, order_id: order.id, signature: p.signature } });
        }
        return res.json({ status: 'success', data: { status: order.status, order_id: order.id } });
    } catch (err: any) {
        res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
});

/**
 * POST /v1/payments/capture
 * Unified endpoint for capturing payments with strong ledger bounds and state machine
 */
router.post('/capture', async (req, res) => {
    try {
        const body = PaymentRequestSchema.parse(req.body);

        let existingOrder = await prisma.order.findUnique({
            where: { id: body.orderId },
            include: { payments: { where: { status: 'CAPTURED' } } }
        });

        if (!existingOrder && body.orderId.startsWith('mock_')) {
            // Simulate mock order for testing
            let mockAmount = 9900;
            if (body.orderId.includes('_amt_')) {
                const parts = body.orderId.split('_');
                const amtIdx = parts.indexOf('amt');
                if (amtIdx !== -1 && parts[amtIdx + 1]) mockAmount = parseInt(parts[amtIdx + 1]);
            }
            existingOrder = {
                id: body.orderId,
                amountPaise: mockAmount,
                status: 'PENDING',
                payments: [],
                merchantId: 'mock_merchant',
                expiresAt: null,
                merchant: {
                    businessName: 'Zenify Music',
                    secretKey: 'sim_secret'
                }
            } as any;
        }

        if (!existingOrder) return res.status(404).json({ status: 'error', error: 'Order not found' });

        if (existingOrder.expiresAt && existingOrder.expiresAt < new Date()) {
            return res.status(400).json({ status: 'error', error: 'Order has expired.' });
        }

        if (existingOrder.status === 'PAID' && existingOrder.payments.length > 0) {
            return res.status(200).json({
                status: 'already_processed',
                data: {
                    payment_id: existingOrder.payments[0].id,
                    order_id: existingOrder.id,
                    signature: existingOrder.payments[0].signature
                }
            });
        }
        if (existingOrder.status !== 'PENDING') return res.status(400).json({ status: 'error', error: 'Order is no longer pending.' });

        const risk = await analyzeTransaction(body.userId, 0);
        if (risk.decision === 'REJECT') {
            return res.status(403).json({ status: 'error', error: risk.reason, risk_score: risk.score });
        }

        const user = await prisma.user.findUnique({ where: { id: body.userId } });
        if (!user) return res.status(404).json({ status: 'error', error: 'User not found' });

        if (body.method === 'card') {
            const card = await prisma.card.findFirst({ where: { id: body.cardId, userId: body.userId } });
            if (!card) return res.status(400).json({ status: 'error', error: 'Valid card not selected' });
            if (!body.cvv) return res.status(400).json({ status: 'error', error: 'CVV is required' });
            const cvvMatch = await bcrypt.compare(body.cvv, card.cvvHash);
            if (!cvvMatch) return res.status(400).json({ status: 'error', error: 'Invalid CVV' });
        } else if (body.method === 'upi') {
            if (user.transactionPinHash) {
                // Priority 5: Brute Force Protection (Check Lockout)
                if (user.lockedUntil && user.lockedUntil > new Date()) {
                    const remaining = Math.ceil((user.lockedUntil.getTime() - Date.now()) / 1000 / 60);
                    return res.status(403).json({ status: 'error', error: `Too many failed attempts. Account locked for ${remaining} more minutes.` });
                }

                if (!body.upiPin) return res.status(400).json({ status: 'error', error: 'UPI PIN is required for this account' });

                const pinMatch = await bcrypt.compare(body.upiPin, user.transactionPinHash);

                if (!pinMatch) {
                    // Priority 5: Increment Failure Count
                    const attempts = user.failedPinAttempts + 1;
                    const lockout = attempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null;

                    await prisma.user.update({
                        where: { id: user.id },
                        data: { failedPinAttempts: attempts, lockedUntil: lockout }
                    });

                    return res.status(401).json({
                        status: 'error',
                        error: lockout ? 'Account locked due to too many failed attempts (15 mins).' : `Invalid UPI PIN. ${5 - attempts} attempts remaining.`
                    });
                }

                // Priority 5: Reset on success
                if (user.failedPinAttempts > 0) {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { failedPinAttempts: 0, lockedUntil: null }
                    });
                }
            }
        }

        // Priority 4: Concurrency Safety with Retry Loop for PRISMA Serializable
        const result = await withTransactionRetry(() => prisma.$transaction(async (tx) => {
            let order = await tx.order.findUnique({ where: { id: body.orderId }, include: { merchant: true } });

            // Handle mock orders within transaction
            if (!order && body.orderId.startsWith('mock_')) {
                order = existingOrder;
            }

            if (!order || order.status !== 'PENDING') throw new Error('Order is already processed or invalid');

            // --- STATE: CREATED ---
            const payment = await tx.payment.create({
                data: { orderId: order.id, userId: body.userId, method: body.method, status: 'CREATED', amountPaise: order.amountPaise, riskScore: risk.score }
            });

            // --- STATE: AUTHORIZED ---
            await transitionState(tx, payment.id, 'CREATED', 'AUTHORIZED', 'system', 'Payment Authorization Initialized');

            // Ledger Concurrency check
            const lastEntry = await tx.ledgerEntries.findFirst({
                where: { userId: body.userId },
                orderBy: { createdAt: 'desc' }
            });
            const balance = lastEntry?.balanceAfter || 0;

            console.log(`💰 [PAYMENT] Checking balance for User ${body.userId}: ${balance} paise. Required: ${order.amountPaise} paise.`);

            if (balance < order.amountPaise) {
                // --- STATE: FAILED ---
                await transitionState(tx, payment.id, 'AUTHORIZED', 'FAILED', 'system', 'Insufficient wallet balance');
                throw new Error('Insufficient wallet balance');
            }

            const signature = crypto.createHmac("sha256", order.merchant.secretKey || 'sim_secret').update(`${order.id}|${payment.id}`).digest("hex");

            await tx.ledgerEntries.create({
                data: {
                    userId: body.userId, type: 'DEBIT', amountPaise: order.amountPaise,
                    referenceType: 'PAYMENT', referenceId: payment.id, balanceAfter: balance - order.amountPaise
                }
            });

            // Need to update signature which isn't part of transition method natively, so update explicitly here
            await tx.payment.update({ where: { id: payment.id }, data: { capturedAt: new Date(), signature } });

            // --- STATE: CAPTURED ---
            await transitionState(tx, payment.id, 'AUTHORIZED', 'CAPTURED', 'system', 'Payment successfully settled to ledger');

            const updatedOrder = await tx.order.update({ where: { id: order.id }, data: { status: 'PAID' } });

            return { payment: { ...payment, signature }, order: updatedOrder, merchantId: order.merchantId };
        }, { isolationLevel: 'Serializable' }));

        dispatchWebhook(result.merchantId, 'payment.captured', { payment_id: result.payment.id, order_id: result.order.id, amount: result.payment.amountPaise, status: 'captured' });

        emitToUser(body.userId, 'balance_update', { balance_after_paise: result.order.amountPaise });
        emitToMerchant(result.merchantId, 'new_sale', { amount: result.order.amountPaise });

        return res.json({
            status: 'success',
            data: { payment_id: result.payment.id, order_id: result.order.id, signature: result.payment.signature }
        });

    } catch (error: any) {
        return res.status(400).json({ status: 'error', error: error.message });
    }
});

/**
 * POST /v1/payments/:id/refund
 * Priority 1: Fully secure refund system supporting partial safe refunds under concurrency
 */
router.post('/:id/refund', async (req, res) => {
    try {
        const { id } = req.params;
        const body = RefundRequestSchema.parse(req.body);

        const paymentCheck = await prisma.payment.findUnique({ where: { id } });
        if (!paymentCheck) return res.status(404).json({ status: 'error', error: 'Payment not found' });
        if (paymentCheck.status !== 'CAPTURED') return res.status(400).json({ status: 'error', error: 'Only captured payments can be refunded' });

        // Priority 8: Wrap in our strict `Serializable` tx retry block to guarantee Row isolation on partial computations
        const result = await withTransactionRetry(() => prisma.$transaction(async (tx) => {
            // Priority 8: Re-verify Payment locking row directly under serializable isolation
            const safePayment = await tx.payment.findUnique({ where: { id } });
            if (!safePayment || safePayment.status !== 'CAPTURED') throw new Error('Payment state changed, cannot refund.');

            // Priority 1: Calculate mathematically precise remaining refundable limit using the atomic refundedPaise tracker
            const remainingRefundable = safePayment.amountPaise - safePayment.refundedPaise;
            if (body.amountPaise > remainingRefundable) {
                throw new Error(`Refund amount exceeds remaining captured balance on this payment. You tried to refund ${body.amountPaise} but only ${remainingRefundable} is left.`);
            }

            const lastEntry = await tx.ledgerEntries.findFirst({
                where: { userId: safePayment.userId },
                orderBy: { createdAt: 'desc' }
            });
            const balance = lastEntry?.balanceAfter || 0;

            const refund = await tx.refund.create({
                data: {
                    paymentId: safePayment.id, amountPaise: body.amountPaise,
                    reason: body.reason, status: 'PROCESSED', processedAt: new Date()
                }
            });

            await tx.ledgerEntries.create({
                data: {
                    userId: safePayment.userId, type: 'CREDIT', amountPaise: body.amountPaise,
                    referenceType: 'REFUND', referenceId: refund.id, balanceAfter: balance + body.amountPaise
                }
            });

            // Priority 1: Atomically Increment the tracker
            const newRefundedTotal = safePayment.refundedPaise + body.amountPaise;
            await tx.payment.update({
                where: { id: safePayment.id },
                data: { refundedPaise: newRefundedTotal }
            });

            // Full Refund threshold met -> Execute priority state machine transition
            if (newRefundedTotal === safePayment.amountPaise) {
                await transitionState(tx, safePayment.id, 'CAPTURED', 'REFUNDED', 'merchant', 'Full refund dispersed');
            }

            return refund;
        }, { isolationLevel: 'Serializable' }));

        emitToUser(paymentCheck.userId, 'balance_update', {});

        return res.json({ status: 'success', data: { refund_id: result.id, status: result.status } });

    } catch (error: any) {
        return res.status(400).json({ status: 'error', error: error.message });
    }
});

export default router;
