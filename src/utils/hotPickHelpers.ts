import type { HotPick } from '@/types/hotPick';

export const getPriceChangeColor = (value: number) =>
  value >= 0 ? 'text-green-500' : 'text-red-500';

export const getCallTypeClass = (type: HotPick['call_type']) =>
  type === 'BUY' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600';

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
