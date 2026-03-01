import { PrismaClient } from '../src/generated/client';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'zen_jwt_secret_9921';

async function main() {
    const merchant = await prisma.merchant.findFirst();
    if (!merchant) {
        process.exit(1);
    }
    const token = jwt.sign({ merchantId: merchant.id, email: merchant.email }, JWT_SECRET);
    console.log(token);
    process.exit(0);
}

main();
