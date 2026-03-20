import { Sparkles } from 'lucide-react';

interface EmptyStateProps {
  onAdd: () => void;
}

const EmptyState = ({ onAdd }: EmptyStateProps) => (
  <div className="rounded-2xl border border-dashed bg-card p-10 text-center">
    <Sparkles className="mx-auto mb-4 h-10 w-10 text-primary" />
    <h3 className="text-xl font-semibold">No hot picks yet</h3>
    <p className="mt-2 text-sm text-muted-foreground">Create your first pick and start tracking opportunities.</p>
    <button onClick={onAdd} className="mt-6 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
      Add Hot Pick
    </button>
  </div>
);

export default EmptyState;
