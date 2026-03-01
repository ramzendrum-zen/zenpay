import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

/**
 * Priority 9: Observability & Audit Logging
 * Injects a unique X-Request-Id into every inbound request to allow
 * cross-service tracing (Correlation ID).
 */
export const requestIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Prefer existing header if present (e.g. from edge gateway/proxy), else generate new
    const requestId = (req.headers['x-request-id'] as string) || uuidv4();

    // Attach to request for downstream usage in routes/controllers
    (req as any).requestId = requestId;

    // Return in response headers for client-side debugging / support tickets
    res.setHeader('X-Request-Id', requestId);

    next();
};
