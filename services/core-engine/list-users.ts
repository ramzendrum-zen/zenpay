import prisma from './src/lib/prisma';

async function findDemo() {
  const user = await prisma.merchant.findUnique({
      where: { email: 'demo@zenwallet.os' }
  });
  console.log('demo@zenwallet.os found:', !!user);
  if (user) console.log('user ID:', user.id);
  await prisma.$disconnect();
}

findDemo();
