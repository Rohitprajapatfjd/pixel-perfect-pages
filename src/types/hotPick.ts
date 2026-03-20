export type HotPickCallType = 'BUY' | 'SELL';

export interface HotPick {
  id: string;
  company_name: string;
  stock_symbol: string;
  exchange: string;
  current_price: number;
  entry_price: number;
  target_price: number;
  stop_loss: number;
  price_change_percentage: number;
  call_type: HotPickCallType;
  confidence: number;
  reward_ratio: number;
  risk_ratio: number;
  pick_date: string;
  is_active: boolean;
}

export type HotPickPayload = Omit<HotPick, 'id'>;

export interface ApiListResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
