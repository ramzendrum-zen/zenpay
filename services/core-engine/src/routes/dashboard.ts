import { Router } from 'express';
import prisma from '../lib/prisma';
import { authenticateMerchant, AuthRequest } from '../middleware/auth';
import { OrderStatus, PaymentStatus } from '@zenwallet/shared-types';

const router = Router();

router.get('/stats', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId;
        if (!merchantId) return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        const { apiKeyId } = req.query;

        // 1. Get all orders for this merchant
        const query: any = { merchantId };
        if (apiKeyId && apiKeyId !== 'all') {
            query.apiKeyId = apiKeyId as string;
        }

        const orders = await prisma.order.findMany({
            where: query,
            include: { payments: true },
            orderBy: { createdAt: 'desc' }
        });

        const totalOrders = orders.length;
        const paidOrders = orders.filter(o => o.status === OrderStatus.PAID);
        const totalVolumePaise = paidOrders.reduce((acc, o) => acc + o.amountPaise, 0);

        const successRate = totalOrders > 0 ? (paidOrders.length / totalOrders) * 100 : 0;
        const avgTicketPaise = paidOrders.length > 0 ? totalVolumePaise / paidOrders.length : 0;

        // Refund Rate (mocking 0 for now as we don't have many refunds yet)
        const refundRate = 0.0;

        // 2. Recent Transactions (Latest 5)
        const recentTransactions = orders.slice(0, 5).map(o => ({
            id: o.id,
            customer: 'Customer', // In a real app, we'd have customer names
            amount: o.amountPaise,
            status: o.status,
            date: o.createdAt
        }));

        // 3. Trends (Simulated for chart)
        const trends = [40, 60, 45, 70, 85, 55, 65, 50, 75, 90, 60, 50]; // Still mock but can be made real later

        res.json({
            status: 'success',
            data: {
                totalVolumePaise,
                successRate: successRate.toFixed(1),
                refundRate: refundRate.toFixed(2),
                avgTicketPaise: Math.round(avgTicketPaise),
                recentTransactions,
                trends
            }
        });
    } catch (error: any) {
        console.error('Dashboard Stats Error:', error);
        res.status(500).json({ status: 'error', error: 'Failed to fetch dashboard stats' });
    }
});

router.get('/transactions', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId;
        const { apiKeyId } = req.query;

        const query: any = { merchantId };
        if (apiKeyId && apiKeyId !== 'all') {
            query.apiKeyId = apiKeyId as string;
        }

        const orders = await prisma.order.findMany({
            where: query,
            include: { payments: true },
            orderBy: { createdAt: 'desc' }
        });

        const transactions = orders.map(o => ({
            id: o.id,
            customer: o.receipt || `Order #${o.id.slice(-6).toUpperCase()}`,
            email: `customer${o.id.slice(-4)}@zen.pay`,
            amount: o.amountPaise,
            status: o.status,
            date: o.createdAt
        }));

        res.json({
            status: 'success',
            data: transactions
        });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to fetch transactions' });
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const order = await prisma.order.findUnique({
            where: { id: req.params.id },
            include: {
                merchant: {
                    select: {
                        businessName: true,
                        id: true
                    }
                }
            }
        });

        if (!order) {
            // Support for development mock orders
            if (req.params.id.startsWith('mock_')) {
                return res.json({
                    status: 'success',
                    data: {
                        id: req.params.id,
                        amountPaise: 9900, // Default mock amount
                        currency: 'INR',
                        status: 'PENDING',
                        merchant: {
                            businessName: 'Zenify Music (MOCK)',
                            id: 'mock_merchant'
                        }
                    }
                });
            }
            return res.status(404).json({ status: 'error', error: 'Order not found' });
        }

        res.json({ status: 'success', data: order });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
});

router.post('/orders', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const { amount, currency, receipt } = req.body;
        const merchantId = req.merchantId;

        if (!merchantId) return res.status(401).json({ status: 'error', error: 'Unauthorized' });

        const order = await prisma.order.create({
            data: {
                merchantId,
                amountPaise: Math.round(amount * 100),
                currency: currency || 'INR',
                receipt: receipt || `REC-${Date.now()}`,
                status: OrderStatus.PENDING
            }
        });

        res.json({ status: 'success', data: order });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to create order' });
    }
});

router.get('/apikeys', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const keys = await prisma.apiKey.findMany({
            where: { merchantId: req.merchantId, revokedAt: null }
        });
        res.json({ status: 'success', data: keys.map(k => ({ id: k.id, name: k.name, publicKey: k.publicKey })) });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed' });
    }
});

export default router;
