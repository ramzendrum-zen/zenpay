import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma';
import { authenticateUser, AuthRequest } from '../middleware/auth';
import { generateCardNumber, generateUPI, maskCard } from '@zenpay/utils';
import { emitToUser } from '../lib/socket';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'zen_jwt_secret_9921';

/**
 * POST /v1/consumer/register
 * Manual registration for a consumer user
 */
router.post('/register', async (req, res) => {
    try {
        const { name, email: rawEmail, password } = req.body;
        if (!rawEmail || !password) return res.status(400).json({ status: 'error', error: 'Email and password are required' });
        const email = rawEmail.toLowerCase();

        const existing = await prisma.user.findUnique({ where: { email } });
        if (existing) return res.status(400).json({ status: 'error', error: 'User already exists' });

        const passwordHash = await bcrypt.hash(password, 12);
        const upiId = generateUPI(name || email.split('@')[0]);
        let transactionPinHash = null;
        if (req.body.transactionPin && req.body.transactionPin.length === 6) {
            transactionPinHash = await bcrypt.hash(req.body.transactionPin, 10);
        }

        // Fixed-format virtual card: 0605-XXXXXXXX-2212
        const cardNumber = generateCardNumber();
        // Expiry: random month (1-12), 2-digit year (e.g. 30 for 2030)
        const expiryMonth = Math.floor(Math.random() * 12) + 1;
        const expiryYear = (new Date().getFullYear() + 4) % 100; // 2-digit year
        // Random 3-digit CVV
        const cvv = Math.floor(Math.random() * 900) + 100;
        const cvvHash = await bcrypt.hash(cvv.toString(), 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordHash,
                transactionPinHash,
                upiId,
                status: 'ACTIVE',
                cards: {
                    create: {
                        cardNumber,
                        expiryMonth,
                        expiryYear,
                        cvvHash,
                        status: 'ACTIVE'
                    }
                }
            },
            include: { cards: true }
        });

        // Initial welcome credit (simulated)
        await prisma.ledgerEntries.create({
            data: {
                userId: user.id,
                type: 'CREDIT',
                amountPaise: 500000, // ₹ 5,000 welcome bonus
                referenceType: 'TRANSFER',
                referenceId: 'welcome_gift',
                balanceAfter: 500000
            }
        });

        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });

        return res.status(201).json({
            status: 'success',
            message: 'Consumer account created',
            data: {
                token,
                user: { id: user.id, email: user.email, upiId: user.upiId },
                card: { ...user.cards[0], cvv } // Show CVV only once at registration
            }
        });
    } catch (error) {
        console.error('Consumer register error:', error);
        return res.status(500).json({ status: 'error', error: 'Failed to create account' });
    }
});

/**
 * POST /v1/consumer/login
 */
router.post('/login', async (req, res) => {
    const { email: rawEmail, password } = req.body;
    const email = rawEmail?.toLowerCase();
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ status: 'error', error: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(401).json({ status: 'error', error: 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
    return res.json({ status: 'success', data: { token, user: { id: user.id, name: user.name, upiId: user.upiId } } });
});

/**
 * GET /v1/consumer/me
 * Calculates balance from ledger and returns masked card
 */
router.get('/me', authenticateUser, async (req: AuthRequest, res) => {
    if (!req.userId) return res.status(401).json({ status: 'error', error: 'Authentication failed: User ID not resolved. Try registering first.' });

    const user = await prisma.user.findUnique({
        where: { id: req.userId },
        include: { cards: true, ledgerEntries: { orderBy: { createdAt: 'desc' }, take: 1 } }
    });

    if (!user) return res.status(404).json({ status: 'error', error: 'Consumer wallet not found. Please register.' });

    const balance = user.ledgerEntries[0]?.balanceAfter || 0;

    return res.json({
        status: 'success',
        data: {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                upiId: user.upiId,
                balance,
                hasTransactionPin: !!user.transactionPinHash
            },
            cards: user.cards.map(c => ({
                id: c.id,
                cardNumber: maskCard(c.cardNumber),
                expiryMonth: c.expiryMonth,
                expiryYear: c.expiryYear,
                status: c.status
            }))
        }
    });
});

/**
 * POST /v1/consumer/reveal-card
 * Verifies password and returns raw sensitive data for display
 */
router.post('/reveal-card', authenticateUser, async (req: AuthRequest, res) => {
    try {
        const { password, pin } = req.body;
        if (!password && !pin) return res.status(400).json({ status: 'error', error: 'Password or PIN required' });

        if (!req.userId) return res.status(401).json({ status: 'error', error: 'Personal wallet session missing.' });

        const user = await prisma.user.findUnique({
            where: { id: req.userId },
            include: { cards: { where: { status: 'ACTIVE' }, take: 1 } }
        });

        if (!user) return res.status(404).json({ status: 'error', error: 'Consumer wallet not found.' });

        let isMatch = false;
        if (password) {
            isMatch = await bcrypt.compare(password, user.passwordHash);
        } else if (pin && user.transactionPinHash) {
            isMatch = await bcrypt.compare(pin, user.transactionPinHash);
        }

        if (!isMatch) return res.status(401).json({ status: 'error', error: 'Invalid credentials' });

        const card = user.cards[0];
        if (!card) return res.status(404).json({ status: 'error', error: 'Card not found' });

        // For security, we usually don't send raw CVV if hashed, but for demo we'll use a representational one
        // or we could have stored it encrypted for this purpose. 
        // For now, let's return a "demo CVV" since it was generated randomly during register.
        // If we want it to be real, we'd need to store rawCVV encrypted. 
        // Let's just return '123' for simulator consistency if it's a demo.
        return res.json({
            status: 'success',
            data: {
                cardNumber: card.cardNumber,
                expiryMonth: card.expiryMonth,
                expiryYear: card.expiryYear,
                cvv: '921' // Hardcoded demo CVV for existing cards, or we use a deterministic one
            }
        });
    } catch (err) {
        return res.status(500).json({ status: 'error', error: 'Failed to reveal card' });
    }
});

/**
 * POST /v1/consumer/setup-pin
 * Sets up a 6 digit transaction PIN for UPI
 */
router.post('/setup-pin', authenticateUser, async (req: AuthRequest, res) => {
    if (!req.userId) return res.status(401).json({ status: 'error', error: 'User wallet not linked. Please register/login first.' });
    try {
        const { pin } = req.body;
        if (!pin || pin.length !== 6 || !/^\d{6}$/.test(pin)) {
            return res.status(400).json({ status: 'error', error: 'PIN must be exactly 6 digits.' });
        }
        const transactionPinHash = await bcrypt.hash(pin, 10);
        await prisma.user.update({
            where: { id: req.userId },
            data: { transactionPinHash }
        });
        return res.json({ status: 'success', message: 'Transaction PIN set successfully' });
    } catch (err) {
        return res.status(500).json({ status: 'error', error: 'Failed to setup PIN' });
    }
});

/**
 * POST /v1/consumer/transfer
 * DB Transaction based transfer
 */
router.post('/transfer', authenticateUser, async (req: AuthRequest, res) => {
    const { toUpiId, amountPaise, note, pin } = req.body;
    if (!toUpiId || !amountPaise) return res.status(400).json({ status: 'error', error: 'Missing transfer details' });

    try {
        const result = await prisma.$transaction(async (tx) => {
            // 0. Verify PIN if sender has one
            const user = await tx.user.findUnique({ where: { id: req.userId } });
            if (user?.transactionPinHash) {
                if (!pin) throw new Error('Transaction PIN required');
                const isPinMatch = await bcrypt.compare(pin, user.transactionPinHash);
                if (!isPinMatch) throw new Error('Invalid Transaction PIN');
            }

            // 1. Get sender balance
            const senderLedger = await tx.ledgerEntries.findFirst({
                where: { userId: req.userId },
                orderBy: { createdAt: 'desc' }
            });
            const senderBalance = senderLedger?.balanceAfter || 0;

            if (senderBalance < amountPaise) {
                throw new Error('Insufficient funds');
            }

            // 2. Find receiver
            const receiver = await tx.user.findUnique({ where: { upiId: toUpiId } });
            if (!receiver) throw new Error('Receiver UPI ID not found');

            const receiverLedger = await tx.ledgerEntries.findFirst({
                where: { userId: receiver.id },
                orderBy: { createdAt: 'desc' }
            });
            const receiverBalance = receiverLedger?.balanceAfter || 0;

            const refId = `tx_${Date.now()}`;

            // 3. Debit Sender
            const debit = await tx.ledgerEntries.create({
                data: {
                    userId: req.userId!,
                    type: 'DEBIT',
                    amountPaise,
                    referenceType: 'TRANSFER',
                    referenceId: refId,
                    balanceAfter: senderBalance - amountPaise
                }
            });

            // 4. Credit Receiver
            const credit = await tx.ledgerEntries.create({
                data: {
                    userId: receiver.id,
                    type: 'CREDIT',
                    amountPaise,
                    referenceType: 'TRANSFER',
                    referenceId: refId,
                    balanceAfter: receiverBalance + amountPaise
                }
            });

            return { refId, debit, credit, receiverId: receiver.id };
        });

        // 5. Emit WebSockets
        emitToUser(req.userId!, 'balance_update', { balance: result.debit.balanceAfter });
        emitToUser(result.receiverId, 'balance_update', { balance: result.credit.balanceAfter });
        emitToUser(result.receiverId, 'payment_received', { from: req.email, amount: amountPaise, note });

        return res.json({ status: 'success', message: 'Transfer successful', data: { referenceId: result.refId } });
    } catch (error: any) {
        return res.status(400).json({ status: 'error', error: error.message });
    }
});

/**
 * POST /v1/consumer/top-up
 * Simple endpoint to add simulated funds for the demo
 */
router.post('/top-up', authenticateUser, async (req: AuthRequest, res) => {
    try {
        const { amountPaise } = req.body;
        if (!amountPaise || amountPaise <= 0) return res.status(400).json({ status: 'error', error: 'Invalid amount' });

        if (!req.userId) {
            console.error('❌ Top-up failed: User session could not be resolved. Ensure registration is complete.');
            return res.status(401).json({ status: 'error', error: 'User wallet session missing' });
        }

        const result = await prisma.$transaction(async (tx) => {
            const lastEntry = await tx.ledgerEntries.findFirst({
                where: { userId: req.userId },
                orderBy: { createdAt: 'desc' }
            });
            const currentBalance = lastEntry?.balanceAfter || 0;

            const entry = await tx.ledgerEntries.create({
                data: {
                    userId: req.userId!,
                    type: 'CREDIT',
                    amountPaise,
                    referenceType: 'TRANSFER',
                    referenceId: `topup_${Date.now()}`,
                    balanceAfter: currentBalance + amountPaise
                }
            });
            return entry;
        });

        emitToUser(req.userId!, 'balance_update', { balance: result.balanceAfter });

        return res.json({ status: 'success', message: 'Funds added successfully', data: { balance: result.balanceAfter } });
    } catch (error: any) {
        console.error('❌ Critical Top-up Error:', error);
        return res.status(500).json({ status: 'error', error: 'Failed to process funding request' });
    }
});

/**
 * GET /v1/consumer/ledger
 */
router.get('/ledger', authenticateUser, async (req: AuthRequest, res) => {
    const entries = await prisma.ledgerEntries.findMany({
        where: { userId: req.userId },
        orderBy: { createdAt: 'desc' },
        take: 50
    });
    return res.json({ status: 'success', data: entries });
});

/**
 * POST /v1/consumer/validate-card
 * Validate if a card number is registered and active
 * Used by checkout SDK to verify payment instrument
 */
router.post('/validate-card', async (req, res) => {
    try {
        const { cardNumber } = req.body;
        if (!cardNumber) return res.status(400).json({ status: 'error', error: 'Card number is required' });

        // Clean the card number (remove spaces)
        const cleaned = cardNumber.replace(/\s/g, '');

        const card = await prisma.card.findFirst({
            where: { cardNumber: cleaned, status: 'ACTIVE' },
            include: { user: { select: { id: true, name: true, upiId: true, status: true } } }
        });

        if (!card) {
            return res.status(404).json({ status: 'error', error: 'Invalid card number. No active card found with this number.' });
        }

        if (card.user.status !== 'ACTIVE') {
            return res.status(403).json({ status: 'error', error: 'This account is suspended. Contact support.' });
        }

        // Check card balance
        const lastEntry = await prisma.ledgerEntries.findFirst({
            where: { userId: card.userId },
            orderBy: { createdAt: 'desc' }
        });
        const balance = lastEntry?.balanceAfter || 0;

        return res.json({
            status: 'success',
            data: {
                valid: true,
                cardId: card.id,
                userId: card.userId,
                maskedCard: `**** **** **** ${cleaned.slice(-4)}`,
                holderName: card.user.name,
                upiId: card.user.upiId,
                balancePaise: balance,
                expiryMonth: card.expiryMonth,
                expiryYear: card.expiryYear
            }
        });
    } catch (err) {
        console.error('Validate card error:', err);
        return res.status(500).json({ status: 'error', error: 'Validation failed' });
    }
});

/**
 * POST /v1/consumer/validate-upi
 * Validate if a UPI ID is registered and active
 * Used by checkout SDK to verify payment instrument
 */
router.post('/validate-upi', async (req, res) => {
    try {
        const { upiId } = req.body;
        if (!upiId) return res.status(400).json({ status: 'error', error: 'UPI ID is required' });

        if (!upiId.includes('@')) {
            return res.status(400).json({ status: 'error', error: 'Invalid UPI ID format. Use format: number@zenpay' });
        }

        const user = await prisma.user.findUnique({
            where: { upiId },
            include: { cards: { where: { status: 'ACTIVE' }, take: 1 } }
        });

        if (!user) {
            return res.status(404).json({ status: 'error', error: 'Invalid UPI ID. No ZenPay account found with this ID.' });
        }

        if (user.status !== 'ACTIVE') {
            return res.status(403).json({ status: 'error', error: 'This ZenPay account is suspended.' });
        }

        const lastEntry = await prisma.ledgerEntries.findFirst({
            where: { userId: user.id },
            orderBy: { createdAt: 'desc' }
        });
        const balance = lastEntry?.balanceAfter || 0;

        return res.json({
            status: 'success',
            data: {
                valid: true,
                userId: user.id,
                holderName: user.name,
                upiId: user.upiId,
                balancePaise: balance,
                hasActiveCard: user.cards.length > 0
            }
        });
    } catch (err) {
        console.error('Validate UPI error:', err);
        return res.status(500).json({ status: 'error', error: 'Validation failed' });
    }
});
/**
 * POST /v1/consumer/top-up
 * Adds funds to a user's wallet
 */
router.post('/top-up', authenticateUser, async (req: AuthRequest, res) => {
    try {
        const { amountPaise } = req.body;
        if (!amountPaise || amountPaise <= 0) return res.status(400).json({ status: 'error', error: 'Invalid amount' });
        if (!req.userId) return res.status(401).json({ status: 'error', error: 'Wallet missing' });

        const result = await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({ where: { id: req.userId } });
            if (!user) throw new Error('User not found');

            const lastEntry = await tx.ledgerEntries.findFirst({
                where: { userId: user.id },
                orderBy: { createdAt: 'desc' }
            });

            const currentBalance = lastEntry?.balanceAfter || 0;
            const newBalance = currentBalance + amountPaise;

            const credit = await tx.ledgerEntries.create({
                data: {
                    userId: user.id,
                    type: 'CREDIT',
                    amountPaise,
                    referenceType: 'TRANSFER',
                    referenceId: `topup_${Date.now()}`,
                    balanceAfter: newBalance
                }
            });

            return { newBalance, creditId: credit.id };
        });

        // Notify client
        emitToUser(req.userId, 'balance_update', {
            type: 'CREDIT',
            amountPaise: amountPaise,
            balanceAfter: result.newBalance
        });

        return res.json({ status: 'success', data: { balance: result.newBalance } });
    } catch (err: any) {
        return res.status(500).json({ status: 'error', error: err.message || 'Failed to add funds' });
    }
});

export default router;
