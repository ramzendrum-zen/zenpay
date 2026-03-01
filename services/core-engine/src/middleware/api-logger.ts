import { Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';

export const apiLogger = async (req: Request, res: Response, next: NextFunction) => {
    const originalJson = res.json;
    const body = { ...req.body };

    // Mask sensitive data in request body if needed
    if (body.password) body.password = '••••••••';
    if (body.token) body.token = '••••••••';

    res.json = function (data) {
        // Collect data for logging
        const logData = {
            merchantId: (req as any).merchantId || 'system',
            endpoint: req.originalUrl,
            method: req.method,
            statusCode: res.statusCode,
            requestBody: JSON.stringify(body),
            responseBody: JSON.stringify(data),
        };

        // Create log entry asynchronously (don't block the response)
        if ((req as any).merchantId) {
            prisma.apiLog.create({
                data: {
                    merchantId: (req as any).merchantId,
                    endpoint: logData.endpoint,
                    method: logData.method,
                    statusCode: logData.statusCode,
                    requestBody: logData.requestBody,
                    responseBody: logData.responseBody,
                }
            }).catch(err => console.error('Failed to log API request:', err));
        }

        return originalJson.call(this, data);
    };

    next();
};
