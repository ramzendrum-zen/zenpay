import { Router } from 'express';
import prisma from '../lib/prisma';
import { authenticateMerchant, AuthRequest } from '../middleware/auth';

const router = Router();

// GET /v1/api-logs
router.get('/', authenticateMerchant, async (req: AuthRequest, res) => {
    try {
        const merchantId = req.merchantId as string;
        const logs = await prisma.apiLog.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' },
            take: 100 // Limit to last 100 for now
        });
        res.json({ status: 'success', data: logs });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Failed to fetch API logs' });
    }
});

export default router;
