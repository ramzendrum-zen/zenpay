
import { PrismaClient } from './src/generated/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
    console.log('--- DB Sync Script ---');
    const email = 'hackerstudent2007@gmail.com';

    try {
        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) {
            console.log('Merchant not found');
            return;
        }

        let user = await prisma.user.findUnique({ where: { email } });
        const cvvHash = await bcrypt.hash('921', 10);

        if (user) {
            console.log('User already exists, updating password hash to match merchant');
            await prisma.user.update({
                where: { email },
                data: { passwordHash: merchant.passwordHash }
            });
        } else {
            console.log('Creating new consumer user for demo');
            user = await prisma.user.create({
                data: {
                    name: merchant.name,
                    email,
                    upiId: 'hackerstudent2007@zenpay',
                    passwordHash: merchant.passwordHash,
                    status: 'ACTIVE',
                    cards: {
                        create: {
                            cardNumber: '4111222233334444',
                            expiryMonth: 12,
                            expiryYear: 30,
                            cvvHash,
                            status: 'ACTIVE'
                        }
                    }
                }
            });

            // Give initial balance via ledger
            await prisma.ledgerEntries.create({
                data: {
                    userId: user.id,
                    type: 'CREDIT',
                    amountPaise: 500000, // ₹ 5,000
                    referenceType: 'TRANSFER',
                    referenceId: 'INITIAL_DEPOSIT',
                    balanceAfter: 500000,
                }
            });
        }
        console.log('✅ Sync Complete');
    } catch (err) {
        console.error('❌ Error:', err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
