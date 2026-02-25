export type TicketStatus = 'open' | 'in_progress' | 'under_review' | 'resolved' | 'closed';
export type TicketPriority = 'critical' | 'high' | 'medium' | 'low';
export type TicketCategory = 'technical' | 'billing' | 'account' | 'feature_request' | 'bug_report' | 'general';
export type UserRole = 'user' | 'admin' | 'merchant';
export type ColorLabel = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Executive {
  id: string;
  name: string;
  department: string;
  activeTickets: number;
  resolvedTotal: number;
  avgRating: number;
}

export interface TicketComment {
  id: string;
  userId: string;
  userName: string;
  message: string;
  createdAt: Date;
  isInternal: boolean;
}

export interface Ticket {
  id: string;
  ticketNumber: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: TicketCategory;
  colorLabel: ColorLabel;
  createdBy: string;
  createdByName: string;
  assignedTo?: string;
  assignedToName?: string;
  createdAt: Date;
  updatedAt: Date;
  resolvedAt?: Date;
  rating?: number;
  ratingFeedback?: string;
  comments: TicketComment[];
  resolutionDetails?: string;
}

export interface CreateTicketInput {
  title: string;
  description: string;
  category: TicketCategory;
  priority: TicketPriority;
  createdBy: string;
  createdByName: string;
}
