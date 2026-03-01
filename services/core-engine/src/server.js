import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRoutes from './routes/orders';
import paymentRoutes from './routes/payments';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Request logging middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});
// Main gateway routes - V1
app.use('/v1/orders', orderRoutes);
app.use('/v1/payments', paymentRoutes);
// Health check
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        version: '1.0.0',
        service: 'ZenWallet Core Engine',
        timestamp: new Date().toISOString()
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ status: 'error', error: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`🚀 ZenWallet Core Engine running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map