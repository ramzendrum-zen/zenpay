const { PrismaClient } = require('./services/core-engine/src/generated/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const merchants = await prisma.merchant.findMany({
            select: { id: true, email: true, publicKey: true }
        });
        console.log('--- Merchants and Keys ---');
        console.log(JSON.stringify(merchants, null, 2));
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
