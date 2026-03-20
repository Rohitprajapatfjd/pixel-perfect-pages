import { Pencil, Trash2 } from 'lucide-react';
import type { HotPick } from '@/types/hotPick';
import { formatCurrency, getCallTypeClass, getPriceChangeColor } from '@/utils/hotPickHelpers';

interface HotPickCardProps {
  item: HotPick;
  onEdit: (item: HotPick) => void;
  onDelete: (item: HotPick) => void;
}

const HotPickCard = ({ item, onEdit, onDelete }: HotPickCardProps) => (
  <article
    className={`rounded-2xl border p-5 shadow-lg backdrop-blur-xl ${
      item.is_active
        ? 'border-emerald-400/50 bg-gradient-to-br from-emerald-500/20 via-card to-teal-500/15'
        : 'border-white/20 bg-gradient-to-br from-slate-100/60 to-slate-200/30 dark:from-slate-900/70 dark:to-slate-800/40'
    }`}
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold">{item.company_name}</h3>
        <p className="text-sm text-muted-foreground">{item.stock_symbol} • {item.exchange}</p>
      </div>
      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${getCallTypeClass(item.call_type)}`}>{item.call_type}</span>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-muted-foreground">Current price</p>
      <p className="font-semibold">{formatCurrency(item.current_price)}</p>
    </div>

    <p className={`mt-1 text-sm font-semibold ${getPriceChangeColor(item.price_change_percentage)}`}>
      {item.price_change_percentage >= 0 ? '+' : ''}
      {item.price_change_percentage}%
    </p>

    <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
      <div className="rounded-lg bg-background/70 p-2">Entry: {formatCurrency(item.entry_price)}</div>
      <div className="rounded-lg bg-background/70 p-2">Target: {formatCurrency(item.target_price)}</div>
      <div className="rounded-lg bg-background/70 p-2">Stop: {formatCurrency(item.stop_loss)}</div>
    </div>

    <div className="mt-4">
      <div className="mb-1 flex justify-between text-xs">
        <span>Confidence</span>
        <span>{item.confidence}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div className="h-full rounded-full bg-primary" style={{ width: `${item.confidence}%` }} />
      </div>
    </div>

    <div className="mt-5 flex gap-2">
      <button onClick={() => onEdit(item)} className="flex flex-1 items-center justify-center gap-1 rounded-lg border px-3 py-2 text-sm">
        <Pencil size={14} /> Edit
      </button>
      <button onClick={() => onDelete(item)} className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-red-300 px-3 py-2 text-sm text-red-500">
        <Trash2 size={14} /> Delete
      </button>
    </div>
  </article>
);

export default HotPickCard;
