import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();

/**
 * Robust retry wrapper for handling strict serialization 40001 anomalies under concurrent load.
 */
export async function withTransactionRetry<T>(
    operation: () => Promise<T>,
    maxRetries = 3
): Promise<T> {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await operation();
        } catch (e: any) {
            if (e.code === 'P2034' || (e.message && e.message.includes('40001'))) {
                const sleepMs = (Math.pow(2, attempt) * 50) + Math.random() * 50;
                await new Promise(res => setTimeout(res, sleepMs));
                continue;
            }
            throw e;
        }
    }
    throw new Error('Transaction failed after maximum retries due to concurrent isolation faults.');
}

export * from '../generated/client';
export { prisma };
export default prisma;
