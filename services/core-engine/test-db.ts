import prisma from './src/lib/prisma';

async function testConnection() {
  try {
    const merchantCount = await prisma.merchant.count();
    console.log(`Connected! Found ${merchantCount} merchants`);
    const demoUser = await prisma.merchant.findUnique({ where: { email: 'demo@zenpay.os' } });
    console.log('Demo User exists:', !!demoUser);
  } catch (err) {
    console.error('Connection failed:', err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
