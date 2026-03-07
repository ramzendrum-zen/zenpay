import prisma from '../lib/prisma';

async function check() {
    try {
        const keys = await (prisma as any).apiKey.findMany({ take: 5 });
        console.log('ApiKey table works. Count:', keys.length);
    } catch (e: any) {
        console.error('ApiKey table error:', e.message);
    }

    try {
        const webhooks = await (prisma as any).webhook.findMany({ take: 5 });
        console.log('Webhook table works. Count:', webhooks.length);
    } catch (e: any) {
        console.error('Webhook table error:', e.message);
    }

    try {
        const merchants = await (prisma as any).merchant.findMany({ take: 1 });
        const m = merchants[0];
        if (m) {
            console.log('Sample merchant:', { id: m.id, name: m.name, publicKey: m.publicKey, hasSecretKey: !!m.secretKey });
        }
    } catch (e: any) {
        console.error('Merchant error:', e.message);
    }

    await prisma.$disconnect();
}

check();
