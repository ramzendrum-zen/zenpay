import { PrismaClient } from '@prisma/client';
import { OrderStatus, PaymentStatus } from '@zenpay/shared-types';

const prisma = new PrismaClient();

async function main() {
    const email = process.argv[2];
    if (!email) {
        console.log('Usage: npx tsx src/scripts/seed-stats.ts <merchant-email>');
        process.exit(1);
    }

    const merchant = await prisma.merchant.findUnique({ where: { email } });
    if (!merchant) {
        console.log('Merchant not found.');
        process.exit(1);
    }

    console.log(`Seeding data for ${merchant.name} (${merchant.id})...`);

    // Create 10 orders
    const ordersData = [
        { amount: 250000, status: OrderStatus.PAID, customer: 'Alice Johnson' },
        { amount: 120000, status: OrderStatus.PAID, customer: 'Bob Smith' },
        { amount: 500000, status: OrderStatus.PENDING, customer: 'Charlie Davis' },
        { amount: 80000, status: OrderStatus.PAID, customer: 'David Brown' },
        { amount: 150000, status: OrderStatus.CANCELLED, customer: 'Eve White' },
        { amount: 300000, status: OrderStatus.PAID, customer: 'Frank Miller' },
        { amount: 450000, status: OrderStatus.PAID, customer: 'Grace Lee' },
        { amount: 100000, status: OrderStatus.PAID, customer: 'Helen Clark' },
        { amount: 600000, status: OrderStatus.PAID, customer: 'Ian Wright' },
        { amount: 220000, status: OrderStatus.PAID, customer: 'Jack Hall' },
    ];

    for (const orderInfo of ordersData) {
        const order = await prisma.order.create({
            data: {
                merchantId: merchant.id,
                amountPaise: orderInfo.amount,
                status: orderInfo.status,
                currency: 'INR'
            }
        });

        if (orderInfo.status === OrderStatus.PAID) {
            // Check for a user or create a generic one
            let user = await prisma.user.findFirst();
            if (!user) {
                user = await prisma.user.create({
                    data: {
                        name: 'Test Consumer',
                        email: 'consumer@zenpay.com',
                        upiId: 'test@zen'
                    }
                });
            }

            await prisma.payment.create({
                data: {
                    orderId: order.id,
                    userId: user.id,
                    method: 'card',
                    status: PaymentStatus.CAPTURED,
                    amountPaise: orderInfo.amount
                }
            });
        }
    }

    console.log('Done seeding 10 sample orders!');
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
});
