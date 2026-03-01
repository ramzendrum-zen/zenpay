import { PrismaClient } from '../src/generated/client';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const SALT = process.env.MERCHANT_SECRET_SALT || 'zen_salt_8829';

async function main() {
    const merchant = await prisma.merchant.findFirst();
    if (!merchant) {
        console.log('No merchant found');
        return;
    }
    const merchantId = merchant.id;
    console.log('Testing generate for merchant:', merchantId);

    const env = 'live';
    const keyPrefix = 'live';
    const publicKey = `pk_${keyPrefix}_${crypto.randomBytes(14).toString('hex')}`;
    const rawSecret = `sk_${keyPrefix}_${crypto.randomBytes(22).toString('hex')}`;
    const secretKeyHash = await bcrypt.hash(rawSecret + SALT, 12);

    try {
        const [newKey] = await prisma.$transaction([
            // Create new key
            prisma.apiKey.create({
                data: {
                    merchantId,
                    publicKey,
                    name: 'Test Key',
                    secretKeyHash,
                    secretKey: rawSecret,
                    environment: env,
                }
            }),
            // Sync to merchant table for backwards compat
            prisma.merchant.update({
                where: { id: merchantId },
                data: { publicKey, secretKeyHash, secretKey: rawSecret }
            })
        ]);
        console.log('Success! Key ID:', newKey.id);
    } catch (err) {
        console.error('FAILED with error:');
        console.error(err);
    }
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
