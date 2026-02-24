import React, { useState, useMemo } from 'react';
import DashboardLayout from '@/components/admin/TicketLayout';
import { useTickets } from '@/context/TicketContext';
import { Ticket, TicketStatus, TicketPriority, ColorLabel } from '@/types/ticket';
import { mockExecutives, trendData, categoryData } from '@/data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { formatDistanceToNow, format } from 'date-fns';
import { toast } from 'sonner';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip,
  ResponsiveContainer, BarChart, Bar, Cell,
} from 'recharts';
import {
  Ticket as TicketIcon, Clock, CheckCircle2, AlertCircle, AlertTriangle,
  Search, Star, Users, TrendingUp, Activity, Zap, Eye, Send,
  MessageSquare, ArrowUpRight, Loader2, Filter,
} from 'lucide-react';

const statusConfig: Record<TicketStatus, { label: string; className: string; icon: React.ReactNode }> = {
  open: { label: 'Open', className: 'bg-primary/15 text-primary border-primary/30', icon: <AlertCircle className="h-3 w-3" /> },
  in_progress: { label: 'In Progress', className: 'bg-accent/15 text-accent border-accent/30', icon: <Loader2 className="h-3 w-3" /> },
  under_review: { label: 'Under Review', className: 'bg-label-purple/15 text-label-purple border-label-purple/30', icon: <Eye className="h-3 w-3" /> },
  resolved: { label: 'Resolved', className: 'bg-success/15 text-success border-success/30', icon: <CheckCircle2 className="h-3 w-3" /> },
  closed: { label: 'Closed', className: 'bg-muted text-muted-foreground border-border', icon: <CheckCircle2 className="h-3 w-3" /> },
};

const priorityConfig: Record<TicketPriority, { label: string; className: string }> = {
  critical: { label: 'Critical', className: 'bg-destructive/15 text-destructive border-destructive/30' },
  high: { label: 'High', className: 'bg-label-orange/15 text-label-orange border-label-orange/30' },
  medium: { label: 'Medium', className: 'bg-accent/15 text-accent border-accent/30' },
  low: { label: 'Low', className: 'bg-muted text-muted-foreground border-border' },
};

const colorLabelClasses: Record<ColorLabel, string> = {
  red: 'bg-label-red', orange: 'bg-label-orange', yellow: 'bg-label-yellow',
  green: 'bg-label-green', blue: 'bg-label-blue', purple: 'bg-label-purple',
};

const TicketSection: React.FC = () => {
  const { tickets, updateStatus, updatePriority, updateColorLabel, assignExecutive, addComment } = useTickets();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [commentText, setCommentText] = useState('');
  const [resolutionText, setResolutionText] = useState('');

  const activeTickets = tickets.filter(t => t.status !== 'closed' && t.status !== 'resolved');
  const criticalTickets = tickets.filter(t => t.priority === 'critical' && t.status !== 'closed' && t.status !== 'resolved');
  const resolvedToday = tickets.filter(t => t.resolvedAt && new Date(t.resolvedAt).toDateString() === new Date().toDateString());
  const ratedTickets = tickets.filter(t => t.rating);
  const avgRating = ratedTickets.length > 0 ? (ratedTickets.reduce((sum, t) => sum + (t.rating || 0), 0) / ratedTickets.length).toFixed(1) : 'N/A';

  const filteredTickets = useMemo(() => {
    return tickets.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.ticketNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.createdByName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [tickets, searchQuery, statusFilter]);

  const handleAddComment = () => {
    if (!commentText.trim() || !selectedTicket) return;
    addComment(selectedTicket.id, {
      userId: 'admin-1',
      userName: 'Sarah Mitchell (Admin)',
      message: commentText.trim(),
      isInternal: false,
    });
    setCommentText('');
    toast.success('Comment added');
  };

  const handleResolve = () => {
    if (!selectedTicket) return;
    updateStatus(selectedTicket.id, 'resolved', resolutionText || undefined);
    toast.success('Ticket resolved');
    setResolutionText('');
    setSelectedTicket(null);
  };

  // Refresh selected ticket
  React.useEffect(() => {
    if (selectedTicket) {
      const updated = tickets.find(t => t.id === selectedTicket.id);
      if (updated) setSelectedTicket(updated);
    }
  }, [tickets]);

  const stats = [
    { label: 'Active Tickets', value: activeTickets.length, icon: <Activity className="h-5 w-5" />, color: 'text-primary', bg: 'bg-primary/10' },
    { label: 'Critical Issues', value: criticalTickets.length, icon: <AlertTriangle className="h-5 w-5" />, color: 'text-destructive', bg: 'bg-destructive/10' },
    { label: 'Resolved Today', value: resolvedToday.length, icon: <CheckCircle2 className="h-5 w-5" />, color: 'text-success', bg: 'bg-success/10' },
    { label: 'Avg. Rating', value: avgRating, icon: <Star className="h-5 w-5" />, color: 'text-accent', bg: 'bg-accent/10' },
    { label: 'Total Tickets', value: tickets.length, icon: <TicketIcon className="h-5 w-5" />, color: 'text-info', bg: 'bg-info/10' },
    { label: 'Team Members', value: mockExecutives.length, icon: <Users className="h-5 w-5" />, color: 'text-label-purple', bg: 'bg-label-purple/10' },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-2xl font-bold">Admin Dashboard</h2>
        <p className="text-sm text-muted-foreground mt-1">Stock advisory & fintech course support operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="glass-card stat-card-hover">
              <CardContent className="p-4">
                <div className={`h-9 w-9 rounded-lg ${s.bg} flex items-center justify-center ${s.color} mb-3`}>
                  {s.icon}
                </div>
                <p className="text-2xl font-display font-bold">{s.value}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{s.label}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Ticket Trend (7 Days)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="openGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(217, 91%, 50%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="resolvedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(145, 65%, 38%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(145, 65%, 38%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                <XAxis dataKey="day" tick={{ fill: 'hsl(215, 15%, 50%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'hsl(215, 15%, 50%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <RechartsTooltip
                  contentStyle={{ backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(214, 20%, 88%)', borderRadius: '8px', fontSize: '12px' }}
                  labelStyle={{ color: 'hsl(215, 25%, 15%)' }}
                />
                <Area type="monotone" dataKey="opened" stroke="hsl(217, 91%, 50%)" fill="url(#openGradient)" strokeWidth={2} name="Opened" />
                <Area type="monotone" dataKey="resolved" stroke="hsl(145, 65%, 38%)" fill="url(#resolvedGradient)" strokeWidth={2} name="Resolved" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="font-display text-sm flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              By Category
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={categoryData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" horizontal={false} />
                <XAxis type="number" tick={{ fill: 'hsl(215, 15%, 50%)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fill: 'hsl(215, 15%, 50%)', fontSize: 11 }} axisLine={false} tickLine={false} width={80} />
                <RechartsTooltip
                  contentStyle={{ backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(214, 20%, 88%)', borderRadius: '8px', fontSize: '12px' }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={18}>
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Critical tickets quick view */}
      {criticalTickets.length > 0 && (
        <div>
          <h3 className="font-display text-sm font-semibold flex items-center gap-2 mb-3">
            <AlertTriangle className="h-4 w-4 text-destructive" /> Critical Issues Requiring Attention
          </h3>
          <div className="space-y-2">
            {criticalTickets.map(ticket => (
              <Card key={ticket.id} className="glass-card border-destructive/20 cursor-pointer hover:border-destructive/40 transition-colors" onClick={() => { setSelectedTicket(ticket); }}>
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    <span className="text-xs text-muted-foreground font-mono">{ticket.ticketNumber}</span>
                    <span className="text-sm font-medium truncate">{ticket.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{ticket.assignedToName || 'Unassigned'}</span>
                    <Badge variant="outline" className={statusConfig[ticket.status].className + ' text-[10px]'}>
                      {statusConfig[ticket.status].label}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl font-bold">All Tickets</h2>
        <span className="text-sm text-muted-foreground">{filteredTickets.length} tickets</span>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tickets..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-9 bg-secondary/50 border-border" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 bg-secondary/50 border-border">
            <Filter className="h-3.5 w-3.5 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in_progress">In Progress</SelectItem>
            <SelectItem value="under_review">Under Review</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Tickets List */}
      <div className="space-y-2">
        {filteredTickets.map((ticket, i) => (
          <motion.div key={ticket.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Card className="glass-card cursor-pointer hover:border-primary/30 transition-all group" onClick={() => setSelectedTicket(ticket)}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${colorLabelClasses[ticket.colorLabel]}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground font-mono">{ticket.ticketNumber}</span>
                      <span className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{ticket.title}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={`text-[10px] ${statusConfig[ticket.status].className}`}>
                        {statusConfig[ticket.status].label}
                      </Badge>
                      <Badge variant="outline" className={`text-[10px] ${priorityConfig[ticket.priority].className}`}>
                        {priorityConfig[ticket.priority].label}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground capitalize">{ticket.category.replace('_', ' ')}</span>
                      <span className="text-[10px] text-muted-foreground">by {ticket.createdByName}</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0 hidden sm:block">
                    <p className="text-xs text-muted-foreground">{ticket.assignedToName || 'Unassigned'}</p>
                    <p className="text-[10px] text-muted-foreground">{formatDistanceToNow(ticket.createdAt, { addSuffix: true })}</p>
                    {ticket.rating && (
                      <div className="flex items-center gap-0.5 justify-end mt-0.5">
                        {Array.from({ length: ticket.rating }).map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 fill-accent text-accent" />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold">Advisory & Support Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockExecutives.map((exec, i) => (
          <motion.div key={exec.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card stat-card-hover">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border border-border">
                    <AvatarFallback className="bg-secondary font-display text-sm">{exec.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{exec.name}</h4>
                    <p className="text-xs text-muted-foreground">{exec.department}</p>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-lg font-display font-bold text-primary">{exec.activeTickets}</p>
                        <p className="text-[10px] text-muted-foreground">Active</p>
                      </div>
                      <div>
                        <p className="text-lg font-display font-bold text-success">{exec.resolvedTotal}</p>
                        <p className="text-[10px] text-muted-foreground">Resolved</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-lg font-display font-bold text-accent">{exec.avgRating}</p>
                          <Star className="h-3 w-3 fill-accent text-accent" />
                        </div>
                        <p className="text-[10px] text-muted-foreground">Rating</p>
                      </div>
                    </div>
                    <Progress value={(exec.activeTickets / 10) * 100} className="mt-3 h-1.5 bg-secondary" />
                    <p className="text-[10px] text-muted-foreground mt-1">Workload: {exec.activeTickets}/10 capacity</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="font-display text-2xl font-bold">Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader><CardTitle className="font-display text-sm">Resolution Rate</CardTitle></CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <p className="text-5xl font-display font-bold text-gradient">
                {Math.round((tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length / tickets.length) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground mt-2">Tickets Resolved</p>
              <Progress value={(tickets.filter(t => t.status === 'resolved' || t.status === 'closed').length / tickets.length) * 100} className="mt-4 h-2 bg-secondary" />
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader><CardTitle className="font-display text-sm">Priority Distribution</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3 py-4">
              {(['critical', 'high', 'medium', 'low'] as TicketPriority[]).map(p => {
                const count = tickets.filter(t => t.priority === p).length;
                const pct = (count / tickets.length) * 100;
                return (
                  <div key={p} className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground w-16 capitalize">{p}</span>
                    <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden">
                      <div className={`h-full rounded-full ${p === 'critical' ? 'bg-destructive' : p === 'high' ? 'bg-label-orange' : p === 'medium' ? 'bg-accent' : 'bg-muted-foreground'}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs text-foreground w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      <div className="p-6 lg:p-8 max-w-7xl">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'tickets' && renderTickets()}
        {activeTab === 'team' && renderTeam()}
        {activeTab === 'analytics' && renderAnalytics()}
      </div>

      {/* Ticket Detail Sheet */}
      <Sheet open={!!selectedTicket} onOpenChange={(open) => !open && setSelectedTicket(null)}>
        <SheetContent className="glass-card w-full sm:max-w-lg border-l border-border overflow-hidden">
          <SheetHeader>
            <SheetTitle className="font-display text-lg flex items-center gap-2">
              <span className="text-muted-foreground font-mono text-sm">{selectedTicket?.ticketNumber}</span>
              Manage Ticket
            </SheetTitle>
          </SheetHeader>
          {selectedTicket && (
            <ScrollArea className="h-[calc(100vh-100px)] pr-4">
              <div className="space-y-5 py-4">
                <div>
                  <h3 className="font-semibold">{selectedTicket.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{selectedTicket.description}</p>
                  <p className="text-[10px] text-muted-foreground mt-2">Submitted by <span className="text-foreground">{selectedTicket.createdByName}</span> · {format(selectedTicket.createdAt, 'MMM dd, yyyy')}</p>
                </div>

                <Separator className="bg-border/50" />

                {/* Admin Controls */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-muted-foreground font-medium">STATUS</label>
                    <Select value={selectedTicket.status} onValueChange={(v) => { updateStatus(selectedTicket.id, v as TicketStatus); toast.success('Status updated'); }}>
                      <SelectTrigger className="bg-secondary/50 border-border h-9 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="open">Open</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="under_review">Under Review</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-muted-foreground font-medium">PRIORITY</label>
                    <Select value={selectedTicket.priority} onValueChange={(v) => { updatePriority(selectedTicket.id, v as TicketPriority); toast.success('Priority updated'); }}>
                      <SelectTrigger className="bg-secondary/50 border-border h-9 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-muted-foreground font-medium">ASSIGN TO</label>
                    <Select value={selectedTicket.assignedTo || 'none'} onValueChange={(v) => {
                      if (v === 'none') return;
                      const exec = mockExecutives.find(e => e.id === v);
                      if (exec) { assignExecutive(selectedTicket.id, exec.id, exec.name); toast.success(`Assigned to ${exec.name}`); }
                    }}>
                      <SelectTrigger className="bg-secondary/50 border-border h-9 text-xs"><SelectValue placeholder="Select..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Unassigned</SelectItem>
                        {mockExecutives.map(e => (<SelectItem key={e.id} value={e.id}>{e.name}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-muted-foreground font-medium">COLOR LABEL</label>
                    <div className="flex items-center gap-1.5 pt-1">
                      {(['red', 'orange', 'yellow', 'green', 'blue', 'purple'] as ColorLabel[]).map(c => (
                        <button key={c} onClick={() => { updateColorLabel(selectedTicket.id, c); toast.success('Label updated'); }}
                          className={`w-6 h-6 rounded-full ${colorLabelClasses[c]} transition-all ${selectedTicket.colorLabel === c ? 'ring-2 ring-foreground ring-offset-2 ring-offset-card scale-110' : 'opacity-60 hover:opacity-100'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resolution */}
                {selectedTicket.status !== 'resolved' && selectedTicket.status !== 'closed' && (
                  <>
                    <Separator className="bg-border/50" />
                    <div className="space-y-2">
                      <label className="text-[10px] text-muted-foreground font-medium">RESOLUTION DETAILS</label>
                      <Textarea placeholder="Add resolution details..." value={resolutionText} onChange={e => setResolutionText(e.target.value)} className="bg-secondary/50 border-border text-sm min-h-[80px]" maxLength={1000} />
                      <Button size="sm" onClick={handleResolve} className="bg-success text-success-foreground hover:bg-success/90">
                        <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" /> Mark Resolved
                      </Button>
                    </div>
                  </>
                )}

                {selectedTicket.resolutionDetails && (
                  <div className="p-3 rounded-lg bg-success/5 border border-success/20">
                    <p className="text-[10px] text-success font-medium mb-1">RESOLUTION</p>
                    <p className="text-sm text-foreground">{selectedTicket.resolutionDetails}</p>
                  </div>
                )}

                {/* Rating display */}
                {selectedTicket.rating && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Client Rating:</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(v => <Star key={v} className={`h-4 w-4 ${v <= selectedTicket.rating! ? 'fill-accent text-accent' : 'text-muted-foreground/20'}`} />)}
                    </div>
                    {selectedTicket.ratingFeedback && <span className="text-xs text-muted-foreground italic ml-1">"{selectedTicket.ratingFeedback}"</span>}
                  </div>
                )}

                <Separator className="bg-border/50" />

                {/* Comments */}
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium mb-3 flex items-center gap-1">
                    <MessageSquare className="h-3 w-3" /> COMMENTS ({selectedTicket.comments.length})
                  </p>
                  <div className="space-y-3">
                    {selectedTicket.comments.map(c => (
                      <div key={c.id} className="flex gap-3">
                        <Avatar className="h-6 w-6 shrink-0">
                          <AvatarFallback className="bg-secondary text-[9px]">{c.userName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold">{c.userName}</span>
                            <span className="text-[10px] text-muted-foreground">{formatDistanceToNow(c.createdAt, { addSuffix: true })}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{c.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Input placeholder="Add admin comment..." value={commentText} onChange={e => setCommentText(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddComment()} className="bg-secondary/50 border-border text-sm" />
                    <Button size="icon" onClick={handleAddComment} className="shrink-0 gradient-primary text-primary-foreground" disabled={!commentText.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollArea>
          )}
        </SheetContent>
      </Sheet>
    </DashboardLayout>
  );
};

export default TicketSection;
