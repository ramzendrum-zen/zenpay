import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function fixCards() {
    const cards = await prisma.card.findMany();
    for (const card of cards) {
        if (!card.cardNumber.startsWith('0605') || !card.cardNumber.endsWith('2212')) {
            const prefix = '0605';
            const suffix = '2212';
            let middle = '';
            for (let i = 0; i < 8; i++) {
                middle += Math.floor(Math.random() * 10).toString();
            }
            const newCard = prefix + middle + suffix;
            await prisma.card.update({
                where: { id: card.id },
                data: { cardNumber: newCard }
            });
            console.log('Updated card', card.id, 'to', newCard);
        }
    }
}

fixCards().catch(console.error).finally(() => prisma.$disconnect());
