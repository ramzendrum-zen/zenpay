export const API_BASE = import.meta.env.VITE_API_BASE_URL || 
    (window.location.hostname === 'localhost' ? 'http://localhost:10000/v1' : 'https://zenpay-jshp.onrender.com/v1');
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 
    (window.location.hostname === 'localhost' ? 'http://localhost:10000' : 'https://zenpay-jshp.onrender.com');
