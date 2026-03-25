import crypto from 'crypto';
import axios from 'axios';
import prisma from '../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

/**
 * Priority 6: Webhook System professionals
 * Durable, secure, and idempotent webhook delivery system.
 */

export async function dispatchWebhook(merchantId: string, event: string, payload: any) {
    try {
        const merchant = await prisma.merchant.findUnique({
            where: { id: merchantId },
            include: { webhooks: { where: { status: 'active' } } }
        });

        if (!merchant || merchant.webhooks.length === 0) return;

        const timestamp = Math.floor(Date.now() / 1000).toString();
        const bodyStr = JSON.stringify(payload);

        for (const wh of merchant.webhooks) {
            // Priority 6: Secure Signature Model (prevents replay and tampering)
            const signaturePayload = `${timestamp}.${bodyStr}`;
            const signature = crypto.createHmac('sha256', wh.secret).update(signaturePayload).digest('hex');

            // Priority 6: Durable Job Record (crash-safe)
            const delivery = await prisma.webhookDelivery.create({
                data: {
                    merchantId,
                    eventId: uuidv4(), // Unique trace per delivery
                    event,
                    payload: bodyStr,
                    url: wh.url,
                    signature,
                    timestamp,
                    status: 'PENDING'
                }
            });

            // Trigger immediate first attempt (async)
            executeDelivery(delivery.id).catch(err => {
                console.error(`Webhook first attempt failed for ${delivery.id}:`, err.message);
            });
        }
    } catch (err: any) {
        console.error('Webhook dispatch error:', err.message);
    }
}

export async function executeDelivery(deliveryId: string) {
    const delivery = await prisma.webhookDelivery.findUnique({ where: { id: deliveryId } });
    if (!delivery || delivery.status === 'SENT') return;

    try {
        await axios.post(delivery.url, JSON.parse(delivery.payload), {
            headers: {
                'Content-Type': 'application/json',
                'X-ZenPay-Signature': delivery.signature,
                'X-ZenPay-Timestamp': delivery.timestamp,
                'X-ZenPay-Event': delivery.event
            },
            timeout: 5000 // 5 second timeout for responsiveness
        });

        await prisma.webhookDelivery.update({
            where: { id: deliveryId },
            data: { status: 'SENT', attempts: delivery.attempts + 1 }
        });

        console.log(`✅ Webhook ${delivery.event} successfully delivered to ${delivery.url}`);
    } catch (err: any) {
        const nextRetry = new Date(Date.now() + Math.pow(2, delivery.attempts + 1) * 60 * 1000); // Exponential Backoff

        await prisma.webhookDelivery.update({
            where: { id: deliveryId },
            data: {
                status: (delivery.attempts + 1 >= 5) ? 'FAILED' : 'PENDING',
                attempts: delivery.attempts + 1,
                lastError: err.message,
                nextRetryAt: (delivery.attempts + 1 >= 5) ? null : nextRetry
            }
        });

        console.warn(`⚠️ Webhook delivery attempt ${delivery.attempts + 1} failed. Next retry: ${nextRetry.toISOString()}`);
    }
}
