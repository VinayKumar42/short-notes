const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const PASTE_URL = `${API_BASE}/pastes`;
export const AUTH_URL = `${API_BASE}/auth`;