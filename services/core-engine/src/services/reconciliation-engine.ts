import cron from 'node-cron';
import prisma, { PaymentStatus, OrderStatus } from '../lib/prisma';
import { dispatchWebhook } from './webhook-service';

export function startReconciliationEngine() {
    console.log('🚀 Reconciliation Engine initializing...');

    // Run every 5 minutes
    cron.schedule('*/5 * * * *', async () => {
        console.log('🔄 Running Reconciliation Scanner...');
        await reconcileStalePayments();
    });

    // Run every 1 minute for webhook retries (higher frequency)
    cron.schedule('* * * * *', async () => {
        await retryPendingWebhooks();
    });
}

/**
 * Priority 7: Auto-Reversal Engine & Reconciliation
 * Scans for payments stuck in AUTHORIZED state due to process crashes or network failures
 */
async function reconcileStalePayments() {
    try {
        // Detect stale payments (e.g., AUTHORIZED but 10 minutes have passed without CAPTURE)
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

        const stalePayments = await prisma.payment.findMany({
            where: {
                status: PaymentStatus.AUTHORIZED,
                createdAt: { lt: tenMinutesAgo }
            },
            include: { order: true }
        });

        if (stalePayments.length === 0) return;
        console.warn(`⚠️ Detected ${stalePayments.length} stale AUTHORIZED payments. Initiating Auto-Reversal...`);

        for (const payment of stalePayments) {
            try {
                await reversePayment(payment);
            } catch (err: any) {
                console.error(`❌ Failed to auto-reverse payment ${payment.id}: ${err.message}`);
            }
        }
    } catch (err: any) {
        console.error('Reconciliation scanning error:', err.message);
    }
}

async function reversePayment(payment: any) {
    await prisma.$transaction(async (tx) => {
        // Ensure it's still AUTHORIZED (prevent race condition where it just got captured)
        const current = await tx.payment.findUnique({ where: { id: payment.id } });
        if (!current || current.status !== (PaymentStatus.AUTHORIZED as any)) return;

        // Note: In our current flow, 'AUTHORIZED' means no ledger DEBIT was created yet.
        // We only reserve the logic for DEBIT at CAPTURE.
        // If money WAS debited during AUTHORIZE in some external implementation, we would insert a ledger CREDIT here.
        // Since ZenPay drops the DEBIT precisely upon CAPTURED state, we only need to safely transition state to REVERSED.

        await tx.payment.update({
            where: { id: payment.id },
            data: { status: PaymentStatus.REVERSED as any, failedReason: 'Auto-reversed due to timeout' }
        });

        await tx.paymentStateTransition.create({
            data: {
                paymentId: payment.id,
                fromStatus: PaymentStatus.AUTHORIZED,
                toStatus: PaymentStatus.REVERSED,
                actor: 'auto_reversal',
                reason: 'Auto-reversed due to lack of subsequent capture confirmation'
            }
        });

        // Update the Order status so it doesn't stay PENDING forever, causing dashboard issues
        await tx.order.update({
            where: { id: payment.orderId },
            data: { status: OrderStatus.CANCELLED as any }
        });
    });

    console.log(`✅ Payment ${payment.id} strictly Auto-Reversed.`);

    // Dispatch webhook to merchant to inform them the intent expired/failed
    dispatchWebhook(payment.order.merchantId, 'payment.reversed', {
        payment_id: payment.id,
        order_id: payment.orderId,
        amount: payment.amountPaise,
        status: 'reversed',
        reason: 'timeout_auto_reversal'
    });
}

/**
 * Priority 6: Durable Job Queue (Crash-Safe Retries)
 */
async function retryPendingWebhooks() {
    try {
        const pending = await prisma.webhookDelivery.findMany({
            where: {
                status: 'PENDING',
                nextRetryAt: { lt: new Date() }
            },
            take: 50 // Limit concurrency per minute
        });

        if (pending.length === 0) return;

        const { executeDelivery } = await import('./webhook-service');

        for (const delivery of pending) {
            executeDelivery(delivery.id).catch(err => {
                console.error(`Retry execution failed for ${delivery.id}:`, err.message);
            });
        }
    } catch (err: any) {
        console.error('Webhook retry scan error:', err.message);
    }
}
