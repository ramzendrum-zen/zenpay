import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import cors from 'cors';
import crypto from 'crypto';
import prisma from '@zenwallet/db';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5002;
const JWT_SECRET = process.env.JWT_SECRET || 'zen_jwt_secret_9921';
/**
 * POST /register/merchant
 */
app.post('/register/merchant', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Generate API Keys
        const publicKey = `pw_live_${crypto.randomBytes(12).toString('hex')}`;
        const secretKey = `sk_live_${crypto.randomBytes(24).toString('hex')}`;
        const secretKeyHash = await bcrypt.hash(secretKey, 10);
        const merchant = await prisma.merchant.create({
            data: {
                name,
                publicKey,
                secretKeyHash,
                status: 'ACTIVE'
            }
        });
        res.json({
            status: 'success',
            data: {
                id: merchant.id,
                publicKey,
                secretKey // Only shown once
            }
        });
    }
    catch (error) {
        res.status(400).json({ status: 'error', error: error.message });
    }
});
/**
 * POST /login/merchant
 */
app.post('/login/merchant', async (req, res) => {
    // Simplified for demo
    const { publicKey, secretKey } = req.body;
    const merchant = await prisma.merchant.findUnique({ where: { publicKey } });
    if (!merchant)
        return res.status(401).json({ error: 'Invalid credentials' });
    const isValid = await bcrypt.compare(secretKey, merchant.secretKeyHash);
    if (!isValid)
        return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: merchant.id, role: 'merchant' }, JWT_SECRET);
    res.json({ status: 'success', token });
});
/**
 * POST /register/user (Consumer)
 */
app.post('/register/user', async (req, res) => {
    const { name, email, upiId } = req.body;
    try {
        const user = await prisma.user.create({
            data: {
                name,
                email,
                upiId,
                status: 'ACTIVE'
            }
        });
        res.json({ status: 'success', userId: user.id });
    }
    catch (error) {
        res.status(400).json({ status: 'error', error: error.message });
    }
});
app.listen(PORT, () => {
    console.log(`🔐 Auth Service running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map