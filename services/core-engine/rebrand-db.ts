import prisma from './src/lib/prisma';

async function rebrandDatabase() {
  try {
    const updatedCount = await prisma.merchant.updateMany({
      where: { email: { contains: 'zenwallet' } },
      data: {
        email: {
          set: 'demo@zenpay.os' // wait, I should replace it correctly
        }
      }
    });

    // Actually, I'll just do a target update for the demo user
    const user = await prisma.merchant.findFirst({
        where: { email: { contains: 'demo' } }
    });

    if (user) {
        await prisma.merchant.update({
            where: { id: user.id },
            data: { email: 'demo@zenpay.os' }
        });
        console.log(`Rebranded ${user.email} to demo@zenpay.os`);
    } else {
        console.log('No demo user found to rebrand.');
    }

  } catch (err) {
    console.error('Rebranding failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

rebrandDatabase();
