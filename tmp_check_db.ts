import prisma from '../services/core-engine/src/lib/prisma';

async function main() {
    try {
        const userCount = await prisma.user.count();
        console.log(`Connected! User count: ${userCount}`);
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
