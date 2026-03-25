const { PrismaClient } = require('./services/core-engine/src/generated/client');
const prisma = new PrismaClient();

async function main() {
    try {
        const order = await prisma.order.findFirst();
        console.log('Sample Order:', order);
    } catch (e) {
        console.error('Schema Error:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
