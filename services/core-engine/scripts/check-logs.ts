import { PrismaClient } from '../src/generated/client';
const prisma = new PrismaClient();

async function main() {
    const logs = await prisma.apiLog.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10
    });
    console.log('Last 10 API Logs:', JSON.stringify(logs, null, 2));
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
