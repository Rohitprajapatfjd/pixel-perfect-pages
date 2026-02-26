import { tokenStorage } from '@/utils/tokenStorage';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestConfig {
  params?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
  body?: unknown;
}

class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

class ApiClient {
  private readonly baseUrl: string;
  private onUnauthorized?: () => void;

  constructor(baseUrl = import.meta.env.VITE_API_BASE_URL ?? '') {
    this.baseUrl = baseUrl;
  }

  setUnauthorizedHandler(handler: () => void) {
    this.onUnauthorized = handler;
  }

  async get<T>(path: string, config?: RequestConfig) {
    return this.request<T>('GET', path, config);
  }

  async post<T>(path: string, body?: unknown, config?: Omit<RequestConfig, 'body'>) {
    return this.request<T>('POST', path, { ...config, body });
  }

  async put<T>(path: string, body?: unknown, config?: Omit<RequestConfig, 'body'>) {
    return this.request<T>('PUT', path, { ...config, body });
  }

  async delete<T>(path: string, config?: RequestConfig) {
    return this.request<T>('DELETE', path, config);
  }

  private buildUrl(path: string, params?: RequestConfig['params']) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const url = new URL(`${this.baseUrl}${normalizedPath}`, window.location.origin);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.append(key, String(value));
        }
      });
    }

    return url.toString();
  }

  private async request<T>(method: HttpMethod, path: string, config: RequestConfig = {}): Promise<T> {
    const token = tokenStorage.get();
    const response = await fetch(this.buildUrl(path, config.params), {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...config.headers,
      },
      body: config.body !== undefined ? JSON.stringify(config.body) : undefined,
    });

    if (response.status === 401) {
      this.onUnauthorized?.();
    }

    const payload = await response.json().catch(() => ({}));

    if (!response.ok) {
      const message = payload?.message || 'Request failed';
      throw new HttpError(message, response.status);
    }

    return payload as T;
  }
}

export const apiClient = new ApiClient();
export { HttpError };
