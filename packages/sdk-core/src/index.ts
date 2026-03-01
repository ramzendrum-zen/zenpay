import axios from 'axios';

export class ZenWalletSDK {
    private apiKey: string;
    private baseUrl: string;

    constructor(apiKey: string, baseUrl: string = 'http://localhost:3001') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async createOrder(data: { amount: number; receipt?: string }) {
        const response = await axios.post(`${this.baseUrl}/v1/orders`, data, {
            headers: {
                'idempotency-key': `order_${Date.now()}`,
                'x-api-key': this.apiKey
            }
        });
        return response.data;
    }
}
