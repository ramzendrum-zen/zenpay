import { PrismaClient } from '../src/generated/client';
const prisma = new PrismaClient();

async function main() {
    const key = await prisma.apiKey.findFirst();
    if (!key) {
        console.log('No keys found to revoke');
        return;
    }
    console.log('Found key:', key.id);
    const updated = await prisma.apiKey.update({
        where: { id: key.id },
        data: { revokedAt: new Date() }
    });
    console.log('Revoked key:', updated.id, 'Revoked at:', updated.revokedAt);
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
