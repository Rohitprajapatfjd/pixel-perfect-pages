import { Users, ShieldCheck, UserCog, UserX } from 'lucide-react';
import { UserStats } from '@/types/userManagement';

interface StatsCardsProps {
  stats: UserStats;
}

const cards = [
  { key: 'totalUsers', label: 'Total Users', icon: Users },
  { key: 'activeUsers', label: 'Active Users', icon: ShieldCheck },
] as const;

const StatsCards = ({ stats }: StatsCardsProps) => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    {cards.map((card) => {
      const Icon = card.icon;
      return (
        <div key={card.key} className="rounded-2xl border bg-card p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm text-muted-foreground">{card.label}</p>
          <p className="text-2xl font-semibold">{stats[card.key]}</p>
        </div>
      );
    })}
  </div>
);

export default StatsCards;
