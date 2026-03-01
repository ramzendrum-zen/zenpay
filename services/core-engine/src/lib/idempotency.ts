// Mock Redis for Idempotency
// In production, use ioredis to connect to an actual Redis instance.

const cache = new Map<string, any>();

export const getIdempotentResponse = async (key: string): Promise<any | null> => {
    return cache.get(key) || null;
};

export const saveIdempotentResponse = async (key: string, response: any, ttlSeconds: number = 86400): Promise<void> => {
    cache.set(key, response);
    // In real Redis, use setex(key, ttl, JSON.stringify(response))
};

export const acquireLock = async (key: string, ttlMs: number = 10000): Promise<boolean> => {
    // Simple lock mock
    if (cache.has(`lock:${key}`)) return false;
    cache.set(`lock:${key}`, true);
    setTimeout(() => cache.delete(`lock:${key}`), ttlMs);
    return true;
};

export const releaseLock = async (key: string): Promise<void> => {
    cache.delete(`lock:${key}`);
};
