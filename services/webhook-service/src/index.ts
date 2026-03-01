import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import { generateSignature } from '@zenwallet/utils';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5001;

/**
 * Internal Endpoint to trigger a webhook
 * In a real-world scenario, this would be triggered by a message queue (RabbitMQ/Redis/etc.)
 */
app.post('/trigger', async (req, res) => {
    const { merchantId, webhookUrl, event, data, secret } = req.body;

    if (!webhookUrl || !secret) {
        return res.status(400).json({ error: 'webhookUrl and secret are required' });
    }

    const payload = {
        event,
        data,
        timestamp: new Date().toISOString()
    };

    const signature = generateSignature(payload, secret);

    try {
        console.log(`[Webhook] Sending ${event} to ${webhookUrl}`);

        // Send with HMAC signature header
        const response = await axios.post(webhookUrl, payload, {
            headers: {
                'Content-Type': 'application/json',
                'X-ZenWallet-Signature': signature
            },
            timeout: 5000
        });

        console.log(`[Webhook] Success: ${response.status}`);
        res.json({ status: 'sent', statusCode: response.status });
    } catch (error: any) {
        console.error(`[Webhook] Failed: ${error.message}`);
        // In production, we would add to a retry queue here
        res.status(500).json({ status: 'failed', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`📡 Webhook Service running on port ${PORT}`);
});
