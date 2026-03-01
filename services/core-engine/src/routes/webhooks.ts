import { Router } from 'express';
import crypto from 'crypto';
import prisma from '../lib/prisma';
import { authenticateMerchant, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /v1/webhooks
router.get('/', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId as string;
        const webhooks = await prisma.webhook.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' }
        });
        res.json({ status: 'success', data: webhooks });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to fetch webhooks' });
    }
});

// POST /v1/webhooks
router.post('/', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const { url, events } = req.body;
        const merchantId = req.merchantId as string;
        if (!url || !events || !events.length) {
            return res.status(400).json({ status: 'error', error: 'url and events are required' });
        }

        const secret = 'whsec_' + crypto.randomBytes(24).toString('hex');

        const webhook = await prisma.webhook.create({
            data: {
                merchantId,
                url,
                events,
                secret,
                status: 'active'
            }
        });

        res.json({
            status: 'success',
            message: 'Webhook endpoint created',
            data: webhook
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to create webhook' });
    }
});

// DELETE /v1/webhooks/:id
router.delete('/:id', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const id = req.params.id as string;
        const merchantId = req.merchantId as string;
        const webhook = await prisma.webhook.findFirst({
            where: { id, merchantId }
        });

        if (!webhook) {
            return res.status(404).json({ status: 'error', error: 'Webhook not found' });
        }

        await prisma.webhook.delete({ where: { id } });
        res.json({ status: 'success', message: 'Webhook endpoint deleted' });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to delete webhook' });
    }
});

export default router;
