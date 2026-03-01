
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function checkKeys() {
    const publicKey = process.env.STRIPE_PUBLIC_KEY || "pk_live_80a35f3d4342f8fcf2ae65b34a7e";
    const key = await (prisma as any).apiKey.findUnique({
        where: { publicKey }
    });

    if (key) {
        console.log('✅ Found API Key:', key);
    } else {
        console.log('❌ API Key not found in DB:', publicKey);
        // Let's create it if it's missing for the demo merchant
        const merchant = await (prisma as any).merchant.findFirst();
        if (merchant) {
            console.log('Creating key for merchant:', merchant.id);
            await (prisma as any).apiKey.create({
                data: {
                    merchantId: merchant.id,
                    publicKey: publicKey,
                    secretKey: process.env.STRIPE_SECRET_KEY || "sk_live_hidden",
                    secretKeyHash: "", // We might need to hash it if the code expects it
                    environment: "live",
                    name: "Zenify Key"
                }
            });
            console.log('✅ Key created');
        }
    }
}

checkKeys().catch(console.error).finally(() => prisma.$disconnect());
