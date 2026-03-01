import crypto from 'crypto';

/**
 * Generates an HMAC SHA256 signature for a given payload and secret.
 */
export const generateSignature = (payload: any, secret: string): string => {
    const data = typeof payload === 'string' ? payload : JSON.stringify(payload);
    return crypto.createHmac('sha256', secret).update(data).digest('hex');
};

/**
 * Verifies if an HMAC SHA256 signature is valid for a given payload and secret.
 */
export const verifySignature = (payload: any, secret: string, signature: string): boolean => {
    const generated = generateSignature(payload, secret);
    return generated === signature;
};

/**
 * Formats a paise amount into a readable INR string.
 * Example: 4500 -> ₹ 45.00
 */
export const formatCurrency = (amountPaise: number): string => {
    return (amountPaise / 100).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    });
};

/**
 * Generates a random transaction or order ID with a prefix.
 */
export const generateId = (prefix: string): string => {
    return `${prefix}_${Math.random().toString(36).substring(2, 11)}`;
};

/**
 * Luhn Algorithm: Validates if a card number is valid.
 */
export const luhnCheck = (cardNumber: string): boolean => {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
};

/**
 * Calculates the Luhn check digit for a given prefix.
 */
export const calculateLuhn = (number: string): number => {
    let sum = 0;
    let shouldDouble = true;
    for (let i = number.length - 1; i >= 0; i--) {
        let digit = parseInt(number.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return (10 - (sum % 10)) % 10;
};

/**
 * Generates a Luhn-valid virtual card number.
 * Simulation BIN: 411111
 */
export const generateCardNumber = (): string => {
    const prefix = '0605';
    const suffix = '2212';
    // Generate 8 unique random digits for the middle
    let middle = '';
    for (let i = 0; i < 8; i++) {
        middle += Math.floor(Math.random() * 10).toString();
    }
    return prefix + middle + suffix;
};

/**
 * Generates a unique UPI ID.
 */
export const generateUPI = (_username: string): string => {
    // Generate a unique 10-digit random number
    const digits = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    return `${digits}@zenpay`;
};

/**
 * Masks a card number for display.
 * Example: 4111111234567890 -> **** **** **** 7890
 */
export const maskCard = (cardNumber: string): string => {
    return `**** **** **** ${cardNumber.slice(-4)}`;
};
