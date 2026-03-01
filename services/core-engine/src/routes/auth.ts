import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import prisma from '../lib/prisma';
import { generateOtp, otpExpiry, sendVerificationEmail, sendPasswordResetEmail } from '../services/email';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'zen_jwt_secret_9921';
const SALT = process.env.MERCHANT_SECRET_SALT || 'zen_salt_8829';

// Helper: generate public/secret key pair for the merchant
function generateMerchantKeys() {
    const publicKey = 'pk_live_' + crypto.randomBytes(16).toString('hex');
    const secretKey = 'sk_live_' + crypto.randomBytes(24).toString('hex');
    return { publicKey, secretKey };
}

/**
 * POST /v1/auth/register
 * Creates a new merchant, sends OTP to their email for verification
 */
router.post('/register', async (req, res) => {
    try {
        const { name, email, businessName, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ status: 'error', error: 'name, email and password are required' });
        }
        if (password.length < 8) {
            return res.status(400).json({ status: 'error', error: 'Password must be at least 8 characters' });
        }

        const existing = await prisma.merchant.findUnique({ where: { email } });
        if (existing) {
            return res.status(409).json({ status: 'error', error: 'An account with this email already exists' });
        }

        const passwordHash = await bcrypt.hash(password, 12);
        const { publicKey, secretKey } = generateMerchantKeys();
        const secretKeyHash = await bcrypt.hash(secretKey + SALT, 10);
        const otp = generateOtp();
        const expiry = otpExpiry();

        const merchant = await prisma.merchant.create({
            data: {
                name,
                email,
                businessName: businessName || '',
                passwordHash,
                publicKey,
                secretKeyHash,
                secretKey, // Store for signature generation
                emailVerified: false,
                otpCode: otp,
                otpExpiry: expiry,
                apiKeys: {
                    create: {
                        publicKey,
                        secretKeyHash,
                        secretKey, // Store for signature generation
                        environment: 'live'
                    }
                }
            }
        });

        await sendVerificationEmail(email, name, otp);
        console.log(`[AUTH] Verification OTP for ${email}: ${otp}`);

        return res.status(201).json({
            status: 'success',
            message: 'Account created. Verification OTP sent to your email.',
            data: { merchantId: merchant.id, email: merchant.email }
        });
    } catch (err: any) {
        console.error('Register error:', err);
        return res.status(500).json({ status: 'error', error: 'Registration failed' });
    }
});

/**
 * POST /v1/auth/verify-otp
 * Verifies OTP; marks email as verified; returns JWT
 */
router.post('/verify-otp', async (req, res) => {
    try {
        const { email, otp } = req.body;
        if (!email || !otp) {
            return res.status(400).json({ status: 'error', error: 'email and otp are required' });
        }

        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) {
            return res.status(404).json({ status: 'error', error: 'Account not found' });
        }
        if (merchant.emailVerified) {
            return res.status(400).json({ status: 'error', error: 'Email is already verified' });
        }
        if (!merchant.otpCode || merchant.otpCode !== otp) {
            return res.status(400).json({ status: 'error', error: 'Invalid OTP code' });
        }
        if (!merchant.otpExpiry || new Date() > merchant.otpExpiry) {
            return res.status(400).json({ status: 'error', error: 'OTP has expired. Please request a new one.' });
        }

        await prisma.merchant.update({
            where: { email },
            data: { emailVerified: true, otpCode: null, otpExpiry: null }
        });

        const token = jwt.sign({ merchantId: merchant.id, email: merchant.email }, JWT_SECRET, { expiresIn: '30d' });

        return res.json({
            status: 'success',
            message: 'Email verified. Welcome to ZenWallet!',
            data: {
                token,
                merchant: { id: merchant.id, name: merchant.name, email: merchant.email, businessName: merchant.businessName, publicKey: merchant.publicKey }
            }
        });
    } catch (err: any) {
        console.error('Verify OTP error:', err);
        return res.status(500).json({ status: 'error', error: 'Verification failed' });
    }
});

/**
 * POST /v1/auth/resend-otp
 * Regenerate and resend OTP
 */
router.post('/resend-otp', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ status: 'error', error: 'email is required' });

        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) return res.status(404).json({ status: 'error', error: 'Account not found' });
        if (merchant.emailVerified) return res.status(400).json({ status: 'error', error: 'Email is already verified' });

        const otp = generateOtp();
        const expiry = otpExpiry();

        await prisma.merchant.update({ where: { email }, data: { otpCode: otp, otpExpiry: expiry } });
        await sendVerificationEmail(email, merchant.name, otp);
        console.log(`[AUTH] Resent Verification OTP for ${email}: ${otp}`);

        return res.json({ status: 'success', message: 'New OTP sent to your email' });
    } catch (err) {
        return res.status(500).json({ status: 'error', error: 'Failed to resend OTP' });
    }
});

/**
 * POST /v1/auth/login
 * Login with email + password; blocks unverified merchants
 */
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ status: 'error', error: 'email and password are required' });
        }

        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) {
            return res.status(401).json({ status: 'error', error: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, merchant.passwordHash);
        if (!passwordMatch) {
            return res.status(401).json({ status: 'error', error: 'Invalid email or password' });
        }

        if (!merchant.emailVerified) {
            // Re-send a fresh OTP so they can verify
            const otp = generateOtp();
            const expiry = otpExpiry();
            await prisma.merchant.update({ where: { email }, data: { otpCode: otp, otpExpiry: expiry } });
            await sendVerificationEmail(email, merchant.name, otp);
            return res.status(403).json({
                status: 'unverified',
                error: 'Email not verified. A new OTP has been sent to your email.',
                data: { email: merchant.email }
            });
        }

        const token = jwt.sign({ merchantId: merchant.id, email: merchant.email }, JWT_SECRET, { expiresIn: '30d' });

        return res.json({
            status: 'success',
            data: {
                token,
                merchant: { id: merchant.id, name: merchant.name, email: merchant.email, businessName: merchant.businessName, publicKey: merchant.publicKey }
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ status: 'error', error: 'Login failed' });
    }
});

/**
 * POST /v1/auth/forgot-password
 * Sends a password-reset OTP to the merchant's email
 */
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ status: 'error', error: 'email is required' });

        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) {
            return res.status(404).json({ status: 'error', error: 'Account is not registered. Register first.' });
        }

        const otp = generateOtp();
        const expiry = otpExpiry();
        await prisma.merchant.update({ where: { email }, data: { otpCode: otp, otpExpiry: expiry } });
        await sendPasswordResetEmail(email, merchant.name, otp);
        console.log(`[AUTH] Password Reset OTP for ${email}: ${otp}`);

        return res.json({ status: 'success', message: 'Password reset OTP sent to your email' });
    } catch (err) {
        return res.status(500).json({ status: 'error', error: 'Failed to send reset email' });
    }
});

/**
 * POST /v1/auth/reset-password
 * Verifies OTP and sets a new password
 */
router.post('/reset-password', async (req, res) => {
    try {
        const { email, otp, newPassword } = req.body;
        if (!email || !otp || !newPassword) {
            return res.status(400).json({ status: 'error', error: 'email, otp and newPassword are required' });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ status: 'error', error: 'Password must be at least 8 characters' });
        }

        const merchant = await prisma.merchant.findUnique({ where: { email } });
        if (!merchant) return res.status(404).json({ status: 'error', error: 'Account not found' });
        if (!merchant.otpCode || merchant.otpCode !== otp) {
            return res.status(400).json({ status: 'error', error: 'Invalid OTP code' });
        }
        if (!merchant.otpExpiry || new Date() > merchant.otpExpiry) {
            return res.status(400).json({ status: 'error', error: 'OTP has expired' });
        }

        const passwordHash = await bcrypt.hash(newPassword, 12);
        await prisma.merchant.update({
            where: { email },
            data: { passwordHash, otpCode: null, otpExpiry: null }
        });

        return res.json({ status: 'success', message: 'Password reset successfully. You can now log in.' });
    } catch (err) {
        return res.status(500).json({ status: 'error', error: 'Password reset failed' });
    }
});

export default router;
