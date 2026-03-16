export const ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    profile: '/admin/me',
  },
  products: {
    list: '/merchant/products',
    create: '/merchant/products',
    details: (id: string | number) => `/merchant/products/${id}`,
  },
} as const;
