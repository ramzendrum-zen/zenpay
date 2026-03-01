import { z } from 'zod';

// --- Enums ---
export enum MerchantStatus {
    ACTIVE = 'ACTIVE',
    SUSPENDED = 'SUSPENDED',
    INACTIVE = 'INACTIVE'
}

export enum OrderStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
    CANCELLED = 'CANCELLED',
    EXPIRED = 'EXPIRED'
}

export enum PaymentStatus {
    INITIATED = 'INITIATED',
    PROCESSING = 'PROCESSING',
    CAPTURED = 'CAPTURED',
    FAILED = 'FAILED',
    REFUNDED = 'REFUNDED'
}

export enum LedgerType {
    DEBIT = 'DEBIT',
    CREDIT = 'CREDIT'
}

export enum ReferenceType {
    ORDER = 'ORDER',
    PAYMENT = 'PAYMENT',
    REFUND = 'REFUND',
    TRANSFER = 'TRANSFER',
    WITHDRAWAL = 'WITHDRAWAL'
}

// --- Zod Schemas ---

export const OrderSchema = z.object({
    id: z.string().cuid().optional(),
    merchantId: z.string(),
    amountPaise: z.number().int().positive(),
    currency: z.string().default('INR'),
    receipt: z.string().optional(),
    status: z.nativeEnum(OrderStatus).default(OrderStatus.PENDING),
    idempotencyKey: z.string().optional(),
});

export const PaymentSchema = z.object({
    id: z.string().cuid().optional(),
    orderId: z.string(),
    userId: z.string(),
    method: z.enum(['card', 'upi', 'qr']),
    status: z.nativeEnum(PaymentStatus).default(PaymentStatus.INITIATED),
    amountPaise: z.number().int().positive(),
    riskScore: z.number().optional(),
    signature: z.string().optional(),
});

export const LedgerEntrySchema = z.object({
    id: z.string().cuid().optional(),
    userId: z.string(),
    type: z.nativeEnum(LedgerType),
    amountPaise: z.number().int().positive(),
    referenceType: z.nativeEnum(ReferenceType),
    referenceId: z.string(),
    balanceAfter: z.number().int(),
});

// --- Types ---

export type Order = z.infer<typeof OrderSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type LedgerEntry = z.infer<typeof LedgerEntrySchema>;

export interface WebhookPayload {
    event: string;
    data: any;
    timestamp: string;
}

export interface ApiResponse<T> {
    status: 'success' | 'error';
    data?: T;
    error?: string;
    code?: string;
}
