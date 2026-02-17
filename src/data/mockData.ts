export interface StockTip {
  id: string;
  symbol: string;
  name: string;
  action: "BUY" | "SELL" | "HOLD";
  targetPrice: number;
  currentPrice: number;
  date: string;
  confidence: number;
}

export interface AlgoService {
  id: string;
  name: string;
  description: string;
  status: "active" | "inactive";
  returns: string;
  risk: "Low" | "Medium" | "High";
  monthlyFee: number;
}

export interface BasketItem {
  id: string;
  symbol: string;
  name: string;
  weight: number;
  currentPrice: number;
  change: number;
}

export interface ServicePlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  isActive: boolean;
  activatedOn?: string;
  expiresOn?: string;
}

export interface Transaction {
  id: string;
  date: string;
  service: string;
  amount: number;
  type: "credit" | "debit";
  status: "completed" | "pending" | "failed";
}

export interface ClientProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  clientId: string;
  joinedDate: string;
  avatar: string;
  plan: string;
  balance: number;
}

export const stockTips: StockTip[] = [
  { id: "1", symbol: "AAPL", name: "Apple Inc.", action: "BUY", targetPrice: 195, currentPrice: 178.5, date: "2026-02-13", confidence: 85 },
  { id: "2", symbol: "MSFT", name: "Microsoft Corp.", action: "HOLD", targetPrice: 420, currentPrice: 415.2, date: "2026-02-12", confidence: 72 },
  { id: "3", symbol: "GOOGL", name: "Alphabet Inc.", action: "BUY", targetPrice: 165, currentPrice: 148.9, date: "2026-02-11", confidence: 90 },
  { id: "4", symbol: "TSLA", name: "Tesla Inc.", action: "SELL", targetPrice: 180, currentPrice: 215.3, date: "2026-02-10", confidence: 68 },
  { id: "5", symbol: "AMZN", name: "Amazon.com", action: "BUY", targetPrice: 200, currentPrice: 185.7, date: "2026-02-09", confidence: 78 },
  { id: "6", symbol: "NVDA", name: "NVIDIA Corp.", action: "BUY", targetPrice: 850, currentPrice: 790.5, date: "2026-02-08", confidence: 92 },
];

export const algoServices: AlgoService[] = [
  { id: "1", name: "Momentum Trader", description: "Automated momentum-based trading strategy", status: "active", returns: "+18.5%", risk: "Medium", monthlyFee: 2999 },
  { id: "2", name: "Mean Reversion", description: "Captures price reversions to mean values", status: "inactive", returns: "+12.3%", risk: "Low", monthlyFee: 1999 },
  { id: "3", name: "Scalp Master", description: "High-frequency scalping algorithm", status: "active", returns: "+24.1%", risk: "High", monthlyFee: 4999 },
  { id: "4", name: "Swing Catcher", description: "Identifies swing trading opportunities", status: "inactive", returns: "+15.7%", risk: "Medium", monthlyFee: 2499 },
];

export const basketItems: BasketItem[] = [
  { id: "1", symbol: "RELIANCE", name: "Reliance Industries", weight: 25, currentPrice: 2450, change: 2.3 },
  { id: "2", symbol: "TCS", name: "Tata Consultancy", weight: 20, currentPrice: 3890, change: -0.8 },
  { id: "3", symbol: "INFY", name: "Infosys Ltd.", weight: 20, currentPrice: 1520, change: 1.5 },
  { id: "4", symbol: "HDFCBANK", name: "HDFC Bank", weight: 15, currentPrice: 1680, change: 0.7 },
  { id: "5", symbol: "ICICIBANK", name: "ICICI Bank", weight: 10, currentPrice: 1050, change: -0.3 },
  { id: "6", symbol: "WIPRO", name: "Wipro Ltd.", weight: 10, currentPrice: 480, change: 1.1 },
];

export const servicePlans: ServicePlan[] = [
  { id: "1", name: "Stock Tips Basic", description: "Daily stock tips with analysis", price: 999, duration: "1 Month", features: ["5 tips/day", "Basic analysis", "Email alerts"], isActive: true, activatedOn: "2026-01-15", expiresOn: "2026-02-15" },
  { id: "2", name: "Algo Trading Pro", description: "Access to all algo trading services", price: 4999, duration: "3 Months", features: ["All algorithms", "Real-time signals", "Priority support", "Custom strategies"], isActive: true, activatedOn: "2026-01-01", expiresOn: "2026-04-01" },
  { id: "3", name: "Basket Investment", description: "Curated stock baskets", price: 1999, duration: "6 Months", features: ["5 baskets", "Rebalancing alerts", "Performance tracking"], isActive: false },
  { id: "4", name: "Premium Bundle", description: "All services included", price: 7999, duration: "12 Months", features: ["All tips", "All algos", "All baskets", "1-on-1 advisory", "Priority support"], isActive: false },
];

export const transactions: Transaction[] = [
  { id: "1", date: "2026-02-13", service: "Stock Tips Basic", amount: 999, type: "debit", status: "completed" },
  { id: "2", date: "2026-02-10", service: "Wallet Recharge", amount: 5000, type: "credit", status: "completed" },
  { id: "3", date: "2026-02-05", service: "Algo Trading Pro", amount: 4999, type: "debit", status: "completed" },
  { id: "4", date: "2026-01-28", service: "Wallet Recharge", amount: 10000, type: "credit", status: "completed" },
  { id: "5", date: "2026-01-20", service: "Basket Investment", amount: 1999, type: "debit", status: "pending" },
  { id: "6", date: "2026-01-15", service: "Premium Bundle", amount: 7999, type: "debit", status: "failed" },
  { id: "7", date: "2026-01-10", service: "Wallet Recharge", amount: 15000, type: "credit", status: "completed" },
  { id: "8", date: "2026-01-05", service: "Stock Tips Basic", amount: 999, type: "debit", status: "completed" },
];

export const clientProfile: ClientProfile = {
  id: "1",
  name: "Rajesh Kumar",
  email: "rajesh.kumar@email.com",
  phone: "+91 98765 43210",
  clientId: "CLT-2026-0042",
  joinedDate: "2025-08-15",
  avatar: "",
  plan: "Algo Trading Pro",
  balance: 12500,
};
