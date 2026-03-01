import prisma from '../lib/prisma';

export interface RiskCheckResult {
    score: number;
    decision: 'APPROVE' | 'REJECT';
    reason?: string;
}

export const analyzeTransaction = async (userId: string, amountPaise: number): Promise<RiskCheckResult> => {
    // 1. Max Transaction Limit
    const MAX_LIMIT = 5000000; // ₹ 50,000
    if (amountPaise > MAX_LIMIT) {
        return { score: 100, decision: 'REJECT', reason: 'Transaction exceeds maximum limit' };
    }

    // 2. Velocity Check (Last 1 minute)
    const oneMinuteAgo = new Date(Date.now() - 60 * 1000);
    const recentTxCount = await prisma.ledgerEntries.count({
        where: {
            userId,
            createdAt: { gte: oneMinuteAgo }
        }
    });

    if (recentTxCount > 3) {
        return { score: 85, decision: 'REJECT', reason: 'High transaction velocity detected' };
    }

    // 3. Repeated Rapid Transactions (Identical amount in last 5 mins)
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    const identicalTx = await prisma.ledgerEntries.findFirst({
        where: {
            userId,
            amountPaise,
            createdAt: { gte: fiveMinutesAgo }
        }
    });

    if (identicalTx) {
        return { score: 70, decision: 'REJECT', reason: 'Possible duplicate transaction' };
    }

    // Base score for safe transactions
    return { score: 5, decision: 'APPROVE' };
};
