import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import rateLimit from 'express-rate-limit';
import { initSocket } from './lib/socket';
import orderRoutes from './routes/orders';
import paymentRoutes from './routes/payments';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';
import keyRoutes from './routes/keys';
import webhookRoutes from './routes/webhooks';
import apiLogRoutes from './routes/api-logs';
import consumerRoutes from './routes/consumer';
import { apiLogger } from './middleware/api-logger';
import { idempotencyMiddleware } from './middleware/idempotency';
import { startReconciliationEngine } from './services/reconciliation-engine';
import { requestIdMiddleware } from './middleware/request-id';
import { startSelfPingService } from './services/keep-alive';

dotenv.config();

const app = express();
app.set('trust proxy', 1);
const httpServer = createServer(app);
const PORT = process.env.PORT || 10000;
console.log(`[SYS] Identified PORT: ${PORT} (from env.PORT: ${process.env.PORT})`);

// In-memory idempotency store (Redis-ready interface)
const idempotencyCache = new Map<string, { status: number; body: any; timestamp: number }>();
const IDEMPOTENCY_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

// Initialize WebSocket
initSocket(httpServer);

// ── Global Rate Limiter (100 req/min per IP) ──
const globalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { status: 'error', error: 'Rate limit exceeded. Max 100 requests per minute.' }
});



// ── Security Headers ──
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Idempotency-Key', 'X-Merchant-Id', 'X-ZenPay-Signature']
}));
app.use(express.json());
app.use(globalLimiter);
app.use(express.static(path.join(__dirname, '../public')));

// Serve the SDK loader specifically (bridge between monorepo packages)
app.use('/ZenPay-sdk.js', (req, res) => {
  const loaderPath = path.resolve(__dirname, '../../../apps/checkout-sdk/dist/loader/zenpay.js');
  res.sendFile(loaderPath, { headers: { 'Content-Type': 'application/javascript' } });
});



app.use(requestIdMiddleware);
app.use(idempotencyMiddleware);
app.use(apiLogger);

// Main gateway routes - V1
app.use('/v1/orders', orderRoutes);
app.use('/v1/payments', paymentRoutes);
app.use('/v1/auth', authRoutes);
app.use('/v1/dashboard', dashboardRoutes);
app.use('/v1/keys', keyRoutes);
app.use('/v1/webhooks', webhookRoutes);
app.use('/v1/api-logs', apiLogRoutes);
app.use('/v1/consumer', consumerRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: '2.0.0',
    service: 'ZenPay Core Engine',
    timestamp: new Date().toISOString(),
    features: ['rate-limiting', 'idempotency', 'hmac-signatures', 'webhooks', 'api-keys'],
    debug_dirname: __dirname,
    debug_public: path.join(__dirname, '../public')
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', error: `Route ${req.method} ${req.path} not found` });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ status: 'error', error: 'Internal Server Error' });
});

httpServer.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 ZenPay Core Engine v2.0 running on port ${PORT}`);
  console.log(`   ✅ Rate limiting: 100 req/min per merchant`);
  console.log(`   ✅ Idempotency keys: 24h TTL`);
  console.log(`   ✅ HMAC signature verification`);
  console.log(`   ✅ WebSockets active`);

  // Priority 7: Start the Auto-Reversal & Reconciliation Engine
  startReconciliationEngine();

  // Priority 8: Start the Keep-Alive Service (Self-Ping)
  startSelfPingService();
});
