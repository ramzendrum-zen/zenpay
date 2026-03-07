const { PrismaClient } = require('./src/generated/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const merchants = await prisma.merchant.findMany({
            select: {
                id: true,
                email: true,
                emailVerified: true
            }
        });
        console.log('--- Merchants ---');
        console.log(JSON.stringify(merchants, null, 2));
        console.log('Total:', merchants.length);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
