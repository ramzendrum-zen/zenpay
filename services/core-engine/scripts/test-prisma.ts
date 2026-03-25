import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
    try {
        const count = await prisma.merchant.count();
        console.log('Merchant count:', count);
    } catch (e) {
        console.error('Prisma connection failed:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
