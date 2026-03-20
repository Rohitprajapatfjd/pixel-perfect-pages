import type { HotPick } from '@/types/hotPick';
import { formatCurrency, getCallTypeClass, getPriceChangeColor } from '@/utils/hotPickHelpers';

interface HotPickTableProps {
  data: HotPick[];
  onEdit: (item: HotPick) => void;
  onDelete: (item: HotPick) => void;
}

const HotPickTable = ({ data, onEdit, onDelete }: HotPickTableProps) => (
  <div className="overflow-x-auto rounded-2xl border bg-card">
    <table className="min-w-full text-sm">
      <thead className="bg-muted/60 text-left">
        <tr>
          {['Company', 'Symbol', 'Current', 'Entry', 'Target', 'Stop Loss', '% Chg', 'Call', 'Confidence', 'Active', 'Actions'].map((col) => (
            <th key={col} className="px-3 py-3 font-medium">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="px-3 py-3 font-medium">{item.company_name}</td>
            <td className="px-3 py-3">{item.stock_symbol}</td>
            <td className="px-3 py-3">{formatCurrency(item.current_price)}</td>
            <td className="px-3 py-3">{formatCurrency(item.entry_price)}</td>
            <td className="px-3 py-3">{formatCurrency(item.target_price)}</td>
            <td className="px-3 py-3">{formatCurrency(item.stop_loss)}</td>
            <td className={`px-3 py-3 font-semibold ${getPriceChangeColor(item.price_change_percentage)}`}>{item.price_change_percentage}%</td>
            <td className="px-3 py-3"><span className={`rounded-full px-2 py-1 text-xs ${getCallTypeClass(item.call_type)}`}>{item.call_type}</span></td>
            <td className="px-3 py-3">{item.confidence}%</td>
            <td className="px-3 py-3">{item.is_active ? 'Yes' : 'No'}</td>
            <td className="px-3 py-3">
              <div className="flex gap-2">
                <button onClick={() => onEdit(item)} className="rounded-md border px-2 py-1">Edit</button>
                <button onClick={() => onDelete(item)} className="rounded-md border border-red-300 px-2 py-1 text-red-500">Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default HotPickTable;
