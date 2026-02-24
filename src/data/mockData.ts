import { Ticket, Executive, User } from '@/types/ticket';
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


const now = new Date();
const daysAgo = (d: number) => new Date(now.getTime() - d * 86400000);
const hoursAgo = (h: number) => new Date(now.getTime() - h * 3600000);

export const mockUsers: User[] = [
  { id: 'user-1', name: 'Rajesh Sharma', email: 'user@demo.com', role: 'user' },
  { id: 'user-2', name: 'Priya Mehta', email: 'priya@company.com', role: 'user' },
  { id: 'user-3', name: 'Amit Patel', email: 'amit@company.com', role: 'user' },
  { id: 'admin-1', name: 'Sanjay Verma', email: 'admin@demo.com', role: 'admin' },
];

export const mockExecutives: Executive[] = [
  { id: 'exec-1', name: 'Vikram Desai', department: 'Trading Support', activeTickets: 5, resolvedTotal: 142, avgRating: 4.5 },
  { id: 'exec-2', name: 'Neha Kapoor', department: 'Billing & Subscription', activeTickets: 3, resolvedTotal: 98, avgRating: 4.7 },
  { id: 'exec-3', name: 'Arjun Nair', department: 'Course Support', activeTickets: 7, resolvedTotal: 215, avgRating: 4.2 },
  { id: 'exec-4', name: 'Deepika Reddy', department: 'Advisory Compliance', activeTickets: 2, resolvedTotal: 176, avgRating: 4.8 },
];

export const mockTickets: Ticket[] = [
  {
    id: 't-1',
    ticketNumber: 'TK-1001',
    title: 'SEBI-registered advisory call alerts not received',
    description: 'I subscribed to the premium intraday stock advisory plan but did not receive call/SMS alerts for Nifty 50 picks today. The last alert was received 2 days ago. Please resolve urgently as I am missing entry/exit points.',
    status: 'in_progress',
    priority: 'critical',
    category: 'technical',
    colorLabel: 'red',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    assignedTo: 'exec-1',
    assignedToName: 'Vikram Desai',
    createdAt: daysAgo(2),
    updatedAt: hoursAgo(4),
    comments: [
      { id: 'c-1', userId: 'exec-1', userName: 'Vikram Desai', message: 'Investigating the SMS gateway logs. Initial analysis shows alert queue delay from our provider.', createdAt: daysAgo(1), isInternal: false },
      { id: 'c-2', userId: 'user-1', userName: 'Rajesh Sharma', message: 'This is affecting my trades significantly. I missed the Bank Nifty entry today. Any ETA on the fix?', createdAt: hoursAgo(8), isInternal: false },
      { id: 'c-3', userId: 'exec-1', userName: 'Vikram Desai', message: 'Root cause identified — SMS provider throttling. Switching to backup gateway. ETA: 4 hours.', createdAt: hoursAgo(4), isInternal: false },
    ],
  },
  {
    id: 't-2',
    ticketNumber: 'TK-1002',
    title: 'Invoice discrepancy for quarterly advisory subscription',
    description: 'The invoice for my Q4 stock advisory subscription shows incorrect charges. Expected amount: ₹24,500. Billed amount: ₹31,200. Please review and issue a corrected invoice with proper GST breakup.',
    status: 'in_progress',
    priority: 'high',
    category: 'billing',
    colorLabel: 'orange',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    assignedTo: 'exec-2',
    assignedToName: 'Neha Kapoor',
    createdAt: daysAgo(3),
    updatedAt: daysAgo(1),
    comments: [
      { id: 'c-4', userId: 'exec-2', userName: 'Neha Kapoor', message: 'Reviewing the billing records and comparing with your subscription plan terms. Will verify GST computation.', createdAt: daysAgo(2), isInternal: false },
    ],
  },
  {
    id: 't-3',
    ticketNumber: 'TK-1003',
    title: 'Cannot access Options Trading course after password reset',
    description: 'After resetting my password, I can log into the main portal but the "Options Trading Masterclass" and "Futures & Derivatives" courses show "Access Denied" error. My premium plan should include all courses.',
    status: 'open',
    priority: 'high',
    category: 'account',
    colorLabel: 'orange',
    createdBy: 'user-2',
    createdByName: 'Priya Mehta',
    createdAt: daysAgo(1),
    updatedAt: daysAgo(1),
    comments: [],
  },
  {
    id: 't-4',
    ticketNumber: 'TK-1004',
    title: 'Feature request: Portfolio P&L tracker with broker integration',
    description: 'We need the ability to track portfolio profit & loss with Zerodha/Groww/Angel One broker API integration. Currently we manually track trades. Auto-import of trades would save significant time.',
    status: 'open',
    priority: 'low',
    category: 'feature_request',
    colorLabel: 'blue',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    createdAt: daysAgo(5),
    updatedAt: daysAgo(5),
    comments: [],
  },
  {
    id: 't-5',
    ticketNumber: 'TK-1005',
    title: 'Live market webinar freezing on mobile devices',
    description: 'The daily market opening analysis webinar becomes unresponsive on mobile browsers (Chrome & Safari on Android/iOS). The video freezes after 10 minutes. Audio continues but screen is stuck.',
    status: 'under_review',
    priority: 'critical',
    category: 'bug_report',
    colorLabel: 'red',
    createdBy: 'user-3',
    createdByName: 'Amit Patel',
    assignedTo: 'exec-3',
    assignedToName: 'Arjun Nair',
    createdAt: daysAgo(4),
    updatedAt: hoursAgo(12),
    comments: [
      { id: 'c-5', userId: 'exec-3', userName: 'Arjun Nair', message: 'Reproduced the issue. Appears to be related to the HLS streaming buffer on mobile. Testing adaptive bitrate fix.', createdAt: hoursAgo(12), isInternal: false },
    ],
  },
  {
    id: 't-6',
    ticketNumber: 'TK-1006',
    title: 'Subscription auto-renewal failed — payment gateway issue',
    description: 'My annual advisory subscription auto-renewal failed. UPI payment via Razorpay timed out. I retried with net banking but the system still shows subscription as lapsed.',
    status: 'resolved',
    priority: 'medium',
    category: 'billing',
    colorLabel: 'yellow',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    assignedTo: 'exec-2',
    assignedToName: 'Neha Kapoor',
    createdAt: daysAgo(7),
    updatedAt: daysAgo(2),
    resolvedAt: daysAgo(2),
    rating: 5,
    ratingFeedback: 'Neha resolved the issue quickly and ensured my advisory access was restored immediately!',
    resolutionDetails: 'Manually triggered subscription renewal via Razorpay dashboard. Confirmed active status and sent updated invoice to client.',
    comments: [
      { id: 'c-6', userId: 'exec-2', userName: 'Neha Kapoor', message: 'Payment reconciled successfully via Razorpay. I\'ve manually activated your subscription.', createdAt: daysAgo(3), isInternal: false },
      { id: 'c-7', userId: 'user-1', userName: 'Rajesh Sharma', message: 'Thank you! Advisory access is restored. Great support!', createdAt: daysAgo(2), isInternal: false },
    ],
  },
  {
    id: 't-7',
    ticketNumber: 'TK-1007',
    title: 'API rate limiting on real-time stock data feed',
    description: 'Our integration with the NSE/BSE live data feed is hitting 429 errors on the /api/v2/market-data endpoint. We need higher rate limits for premium subscribers or batch processing support for tick data.',
    status: 'in_progress',
    priority: 'high',
    category: 'technical',
    colorLabel: 'orange',
    createdBy: 'user-2',
    createdByName: 'Priya Mehta',
    assignedTo: 'exec-4',
    assignedToName: 'Deepika Reddy',
    createdAt: daysAgo(3),
    updatedAt: hoursAgo(6),
    comments: [
      { id: 'c-8', userId: 'exec-4', userName: 'Deepika Reddy', message: 'Analyzing current rate limit configuration. Will propose an optimized WebSocket-based real-time feed for premium users.', createdAt: daysAgo(1), isInternal: false },
    ],
  },
  {
    id: 't-8',
    ticketNumber: 'TK-1008',
    title: 'Course completion certificate not generated',
    description: 'I completed the "Technical Analysis for Indian Markets" course with 100% progress but the SEBI-compliant completion certificate was not auto-generated. Need it for compliance records.',
    status: 'open',
    priority: 'medium',
    category: 'technical',
    colorLabel: 'yellow',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    createdAt: daysAgo(1),
    updatedAt: daysAgo(1),
    comments: [],
  },
  {
    id: 't-9',
    ticketNumber: 'TK-1009',
    title: 'Request to merge duplicate Demat-linked accounts',
    description: 'I have two accounts linked to different Demat IDs that need to be merged: old PAN-based account and new Aadhaar-linked account. All trade history and course progress should be consolidated.',
    status: 'closed',
    priority: 'low',
    category: 'account',
    colorLabel: 'green',
    createdBy: 'user-3',
    createdByName: 'Amit Patel',
    assignedTo: 'exec-3',
    assignedToName: 'Arjun Nair',
    createdAt: daysAgo(10),
    updatedAt: daysAgo(5),
    resolvedAt: daysAgo(5),
    rating: 4,
    ratingFeedback: 'Accounts merged successfully, though it took a bit longer than expected due to KYC verification.',
    resolutionDetails: 'Merged accounts after KYC re-verification. All trade history and course progress transferred. Old account deactivated per SEBI compliance.',
    comments: [
      { id: 'c-9', userId: 'exec-3', userName: 'Arjun Nair', message: 'Account merge completed after KYC verification. Please verify all your trade history and course data is intact.', createdAt: daysAgo(5), isInternal: false },
    ],
  },
  {
    id: 't-10',
    ticketNumber: 'TK-1010',
    title: 'Market opening advisory emails delayed by 2+ hours',
    description: 'Pre-market advisory emails (9:00 AM IST picks) are being delivered at 11:00 AM+ which makes them useless for intraday trading. Started approximately 3 days ago.',
    status: 'under_review',
    priority: 'medium',
    category: 'bug_report',
    colorLabel: 'yellow',
    createdBy: 'user-1',
    createdByName: 'Rajesh Sharma',
    assignedTo: 'exec-1',
    assignedToName: 'Vikram Desai',
    createdAt: daysAgo(3),
    updatedAt: daysAgo(1),
    comments: [
      { id: 'c-10', userId: 'exec-1', userName: 'Vikram Desai', message: 'Email queue analysis shows backlog in the notification service. Scaling up workers and prioritizing advisory emails over marketing.', createdAt: daysAgo(1), isInternal: false },
    ],
  },
];

export const trendData = [
  { day: 'Mon', opened: 4, resolved: 3 },
  { day: 'Tue', opened: 6, resolved: 5 },
  { day: 'Wed', opened: 3, resolved: 4 },
  { day: 'Thu', opened: 7, resolved: 2 },
  { day: 'Fri', opened: 5, resolved: 6 },
  { day: 'Sat', opened: 2, resolved: 3 },
  { day: 'Sun', opened: 3, resolved: 4 },
];

export const categoryData = [
  { name: 'Trading Support', count: 12, fill: 'hsl(217, 91%, 50%)' },
  { name: 'Billing', count: 8, fill: 'hsl(38, 95%, 55%)' },
  { name: 'Account/KYC', count: 5, fill: 'hsl(270, 55%, 55%)' },
  { name: 'Course Issues', count: 9, fill: 'hsl(0, 72%, 51%)' },
  { name: 'Feature Req.', count: 4, fill: 'hsl(210, 85%, 55%)' },
  { name: 'Advisory', count: 3, fill: 'hsl(150, 60%, 38%)' },
]