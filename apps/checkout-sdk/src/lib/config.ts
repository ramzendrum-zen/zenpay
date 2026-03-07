export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/v1';
export const SOCKET_URL = import.meta.env.VITE_API_BASE_URL
    ? import.meta.env.VITE_API_BASE_URL.replace('/v1', '')
    : 'http://localhost:4000';
