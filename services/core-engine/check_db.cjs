const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const merchants = await prisma.merchant.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5,
            select: {
                id: true,
                email: true,
                emailVerified: true,
                otpCode: true,
                otpExpiry: true,
                createdAt: true
            }
        });
        console.log('--- Recent Merchants ---');
        console.log(JSON.stringify(merchants, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
