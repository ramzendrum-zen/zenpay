import axios from 'axios';
import crypto from 'crypto';
export async function sendWebhook(url, secret, payload) {
    try {
        const signature = crypto
            .createHmac('sha256', secret)
            .update(JSON.stringify(payload))
            .digest('hex');
        await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                'x-zenwallet-signature': signature
            },
            timeout: 5000 // 5 seconds timeout
        });
        console.log(`Webhook sent to ${url} successfully.`);
    }
    catch (error) {
        console.error(`Failed to send webhook to ${url}:`, error);
        // In production, we'd add retry logic here
    }
}
//# sourceMappingURL=webhooks.js.map