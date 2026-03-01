// Mock Redis for Idempotency
// In production, use ioredis to connect to an actual Redis instance.
const cache = new Map();
export const getIdempotentResponse = async (key) => {
    return cache.get(key) || null;
};
export const saveIdempotentResponse = async (key, response, ttlSeconds = 86400) => {
    cache.set(key, response);
    // In real Redis, use setex(key, ttl, JSON.stringify(response))
};
export const acquireLock = async (key, ttlMs = 10000) => {
    // Simple lock mock
    if (cache.has(`lock:${key}`))
        return false;
    cache.set(`lock:${key}`, true);
    setTimeout(() => cache.delete(`lock:${key}`), ttlMs);
    return true;
};
export const releaseLock = async (key) => {
    cache.delete(`lock:${key}`);
};
//# sourceMappingURL=idempotency.js.map