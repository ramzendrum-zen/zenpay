export declare const getIdempotentResponse: (key: string) => Promise<any | null>;
export declare const saveIdempotentResponse: (key: string, response: any, ttlSeconds?: number) => Promise<void>;
export declare const acquireLock: (key: string, ttlMs?: number) => Promise<boolean>;
export declare const releaseLock: (key: string) => Promise<void>;
//# sourceMappingURL=idempotency.d.ts.map
