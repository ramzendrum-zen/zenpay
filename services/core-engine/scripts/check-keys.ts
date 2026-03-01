import { PrismaClient } from '../src/generated/client';
import dotenv from 'dotenv';
dotenv.config();
const prisma = new PrismaClient();

async function main() {
    const keys = await prisma.apiKey.findMany();
    console.log('API Keys in database:', JSON.stringify(keys, null, 2));
    process.exit(0);
}

main().catch(err => {
    console.error(err);
    process.exit(1);
});
