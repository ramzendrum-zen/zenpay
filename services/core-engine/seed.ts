import prisma from './src/lib/prisma';
import bcrypt from 'bcryptjs';

async function seed() {
  const passwordHash = await bcrypt.hash('pass123', 8);
  const merchant = await prisma.merchant.upsert({
    where: { email: 'demo@zenpay.os' },
    update: { passwordHash, emailVerified: true },
    create: {
      name: 'Demo Merchant',
      email: 'demo@zenpay.os',
      businessName: 'ZenPay Sandbox',
      passwordHash,
      emailVerified: true,
      publicKey: 'pk_live_demo123',
      secretKeyHash: await bcrypt.hash('sk_live_demo123' + (process.env.MERCHANT_SECRET_SALT || 'zen_salt_8829'), 8),
      secretKey: 'sk_live_demo123'
    }
  });

  console.log('Merchant created/updated:', merchant.email);
  await prisma.$disconnect();
}

seed();
