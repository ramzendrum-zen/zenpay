import axios from 'axios';
import { CronJob } from 'cron';

/**
 * Self-ping service to keep the Render free tier instance active.
 * Free tier usually spins down after 15 minutes of inactivity.
 */
export function startSelfPingService() {
    const RENDER_EXTERNAL_URL = process.env.RENDER_EXTERNAL_URL || 'https://zenpay-jshp.onrender.com';
    const HEALTH_CHECK_ENDPOINT = `${RENDER_EXTERNAL_URL}/health`;

    console.log(`[SYS] Initializing Self-Ping Service targeting: ${HEALTH_CHECK_ENDPOINT}`);

    // Ping every 10 minutes (Free tier sleeps after 15m)
    const job = new CronJob('*/10 * * * *', async () => {
        try {
            console.log(`[SYS] Self-Ping trace: ${new Date().toISOString()} -> Warming up...`);
            const response = await axios.get(HEALTH_CHECK_ENDPOINT, { timeout: 10000 });
            if (response.status === 200) {
                console.log(`[SYS] Self-Ping confirmed: Node is ACTIVE.`);
            }
        } catch (error: any) {
            console.error(`[SYS] Self-Ping failed: ${error.message}`);
        }
    });

    job.start();
}
