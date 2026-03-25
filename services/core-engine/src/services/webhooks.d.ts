interface WebhookPayload {
    event: string;
    order_id: string;
    payment_id: string;
    amount: number;
    status: string;
}
export declare function sendWebhook(url: string, secret: string, payload: WebhookPayload): Promise<void>;
export {};
//# sourceMappingURL=webhooks.d.ts.map
