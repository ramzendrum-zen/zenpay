const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4000';
export const API_BASE = import.meta.env.VITE_API_BASE_URL || `${origin}/v1`;
export const SOCKET_URL = import.meta.env.VITE_API_BASE_URL
    ? import.meta.env.VITE_API_BASE_URL.replace('/v1', '')
    : origin;
