import { tokenStorage } from '@/utils/tokenStorage';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type Primitive = string | number | boolean | undefined;

type RequestConfig = {
  params?: Record<string, Primitive>;
  headers?: Record<string, string>;
};

export type ApiError = {
  status?: number;
  message: string;
  raw?: unknown;
};

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ??
  (import.meta.env.PROD ? 'https://api.mydomain.com' : 'http://localhost:8000/api');

const protectedPrefixes = ['/admin', '/merchant'];
const publicRoutePrefixes = ['/auth/login', '/auth/register', '/public'];

const shouldAttachToken = (path: string) => {
  const isPublicRoute = publicRoutePrefixes.some((prefix) => path.startsWith(prefix));
  if (isPublicRoute) return false;

  return protectedPrefixes.some((prefix) => path.startsWith(prefix));
};

const buildUrl = (path: string, params?: RequestConfig['params']) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(`${API_BASE_URL}${normalizedPath}`, window.location.origin);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        url.searchParams.set(key, String(value));
      }
    });
  }

  return url.toString();
};

const handleUnauthorized = () => {
  tokenStorage.clear();
  localStorage.removeItem('auth_state');

  if (window.location.pathname !== '/login') {
    window.location.assign('/login');
  }
};

const request = async <T>(method: HttpMethod, path: string, body?: unknown, config: RequestConfig = {}) => {
  const token = tokenStorage.get();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...config.headers,
  };

  if (token && shouldAttachToken(path)) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(buildUrl(path, config.params), {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  const payload = await response.json().catch(() => ({}));

  if (response.status === 401) {
    handleUnauthorized();
  }

  if (!response.ok) {
    const error: ApiError = {
      status: response.status,
      message: payload?.message ?? 'Request failed',
      raw: payload,
    };
    throw error;
  }

  return { data: payload as T };
};

export const axiosInstance = {
  get: <T>(path: string, config?: RequestConfig) => request<T>('GET', path, undefined, config),
  post: <T>(path: string, body?: unknown, config?: RequestConfig) => request<T>('POST', path, body, config),
  put: <T>(path: string, body?: unknown, config?: RequestConfig) => request<T>('PUT', path, body, config),
  delete: <T>(path: string, config?: RequestConfig) => request<T>('DELETE', path, undefined, config),
};

export { API_BASE_URL };
