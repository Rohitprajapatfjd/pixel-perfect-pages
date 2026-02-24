import React, { createContext, useContext, useState, useCallback } from 'react';
import { Ticket, CreateTicketInput, TicketStatus, TicketPriority, ColorLabel, TicketComment } from '@/types/ticket';
import { mockTickets } from '@/data/mockData';

interface TicketContextType {
  tickets: Ticket[];
  createTicket: (input: CreateTicketInput) => Ticket;
  updateTicket: (id: string, updates: Partial<Ticket>) => void;
  addComment: (ticketId: string, comment: Omit<TicketComment, 'id' | 'createdAt'>) => void;
  assignExecutive: (ticketId: string, execId: string, execName: string) => void;
  updateStatus: (ticketId: string, status: TicketStatus, resolutionDetails?: string) => void;
  updatePriority: (ticketId: string, priority: TicketPriority) => void;
  updateColorLabel: (ticketId: string, label: ColorLabel) => void;
  rateTicket: (ticketId: string, rating: number, feedback?: string) => void;
  getTicketById: (id: string) => Ticket | undefined;
}

const TicketContext = createContext<TicketContextType | null>(null);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const createTicket = useCallback((input: CreateTicketInput): Ticket => {
    const newTicket: Ticket = {
      id: `t-${Date.now()}`,
      ticketNumber: `TK-${1010 + Math.floor(Math.random() * 100)}`,
      title: input.title,
      description: input.description,
      status: 'open',
      priority: input.priority,
      category: input.category,
      colorLabel: input.priority === 'critical' ? 'red' : input.priority === 'high' ? 'orange' : input.priority === 'medium' ? 'yellow' : 'green',
      createdBy: input.createdBy,
      createdByName: input.createdByName,
      createdAt: new Date(),
      updatedAt: new Date(),
      comments: [],
    };
    setTickets(prev => [newTicket, ...prev]);
    return newTicket;
  }, []);

  const updateTicket = useCallback((id: string, updates: Partial<Ticket>) => {
    setTickets(prev => prev.map(t =>
      t.id === id ? { ...t, ...updates, updatedAt: new Date() } : t
    ));
  }, []);

  const addComment = useCallback((ticketId: string, comment: Omit<TicketComment, 'id' | 'createdAt'>) => {
    const newComment: TicketComment = {
      ...comment,
      id: `c-${Date.now()}`,
      createdAt: new Date(),
    };
    setTickets(prev => prev.map(t =>
      t.id === ticketId ? { ...t, comments: [...t.comments, newComment], updatedAt: new Date() } : t
    ));
  }, []);

  const assignExecutive = useCallback((ticketId: string, execId: string, execName: string) => {
    updateTicket(ticketId, { assignedTo: execId, assignedToName: execName });
  }, [updateTicket]);

  const updateStatus = useCallback((ticketId: string, status: TicketStatus, resolutionDetails?: string) => {
    const updates: Partial<Ticket> = { status };
    if (status === 'resolved' || status === 'closed') {
      updates.resolvedAt = new Date();
    }
    if (resolutionDetails) updates.resolutionDetails = resolutionDetails;
    updateTicket(ticketId, updates);
  }, [updateTicket]);

  const updatePriority = useCallback((ticketId: string, priority: TicketPriority) => {
    const colorMap: Record<TicketPriority, ColorLabel> = {
      critical: 'red', high: 'orange', medium: 'yellow', low: 'green',
    };
    updateTicket(ticketId, { priority, colorLabel: colorMap[priority] });
  }, [updateTicket]);

  const updateColorLabel = useCallback((ticketId: string, label: ColorLabel) => {
    updateTicket(ticketId, { colorLabel: label });
  }, [updateTicket]);

  const rateTicket = useCallback((ticketId: string, rating: number, feedback?: string) => {
    updateTicket(ticketId, { rating, ratingFeedback: feedback });
  }, [updateTicket]);

  const getTicketById = useCallback((id: string) => {
    return tickets.find(t => t.id === id);
  }, [tickets]);

  return (
    <TicketContext.Provider value={{
      tickets, createTicket, updateTicket, addComment, assignExecutive,
      updateStatus, updatePriority, updateColorLabel, rateTicket, getTicketById,
    }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const ctx = useContext(TicketContext);
  if (!ctx) throw new Error('useTickets must be used within TicketProvider');
  return ctx;
};
