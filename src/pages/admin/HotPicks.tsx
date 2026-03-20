import { useMemo, useState } from 'react';
import { LayoutGrid, Table } from 'lucide-react';
import HotPickTable from '@/components/admin/hot-picks/HotPickTable';
import HotPickCard from '@/components/admin/hot-picks/HotPickCard';
import HotPickModal from '@/components/admin/hot-picks/HotPickModal';
import Loader from '@/components/admin/hot-picks/Loader';
import EmptyState from '@/components/admin/hot-picks/EmptyState';
import DeleteConfirmModal from '@/components/admin/hot-picks/DeleteConfirmModal';
import { useHotPicks } from '@/hooks/hot-picks/useHotPicks';
import { useCreateHotPick } from '@/hooks/hot-picks/useCreateHotPick';
import { useUpdateHotPick } from '@/hooks/hot-picks/useUpdateHotPick';
import { useDeleteHotPick } from '@/hooks/hot-picks/useDeleteHotPick';
import type { HotPick, HotPickPayload } from '@/types/hotPick';

type ViewMode = 'table' | 'card';

const HotPicks = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('table');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingHotPick, setEditingHotPick] = useState<HotPick | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<HotPick | null>(null);

  const { data = [], isLoading } = useHotPicks();
  const createMutation = useCreateHotPick();
  const updateMutation = useUpdateHotPick();
  const deleteMutation = useDeleteHotPick();

  const mode = editingHotPick ? 'edit' : 'create';

  const sortedData = useMemo(
    () => [...data].sort((a, b) => Number(b.is_active) - Number(a.is_active)),
    [data]
  );

  const handleAdd = () => {
    setEditingHotPick(null);
    setModalOpen(true);
  };

  const handleEdit = (item: HotPick) => {
    setEditingHotPick(item);
    setModalOpen(true);
  };

  const handleSubmit = async (payload: HotPickPayload) => {
    if (editingHotPick) {
      await updateMutation.mutateAsync({ id: editingHotPick.id, payload });
    } else {
      await createMutation.mutateAsync(payload);
    }

    setModalOpen(false);
    setEditingHotPick(null);
  };

  return (
    <section className="space-y-5">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">Hot Picks Management</h1>
          <p className="text-sm text-muted-foreground">Create and manage your daily hot picks in one place.</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border bg-card p-1">
            <button onClick={() => setViewMode('table')} className={`rounded-md px-3 py-1.5 ${viewMode === 'table' ? 'bg-primary text-primary-foreground' : ''}`}>
              <Table size={16} />
            </button>
            <button onClick={() => setViewMode('card')} className={`rounded-md px-3 py-1.5 ${viewMode === 'card' ? 'bg-primary text-primary-foreground' : ''}`}>
              <LayoutGrid size={16} />
            </button>
          </div>

          <button onClick={handleAdd} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Add Hot Pick</button>
        </div>
      </header>

      {isLoading ? (
        <Loader />
      ) : sortedData.length === 0 ? (
        <EmptyState onAdd={handleAdd} />
      ) : viewMode === 'table' ? (
        <HotPickTable data={sortedData} onEdit={handleEdit} onDelete={setDeleteTarget} />
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sortedData.map((item) => (
            <HotPickCard key={item.id} item={item} onEdit={handleEdit} onDelete={setDeleteTarget} />
          ))}
        </div>
      )}

      <HotPickModal
        open={modalOpen}
        mode={mode}
        initialData={editingHotPick}
        isLoading={createMutation.isPending || updateMutation.isPending}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmit}
      />

      <DeleteConfirmModal
        open={Boolean(deleteTarget)}
        name={deleteTarget?.company_name}
        isLoading={deleteMutation.isPending}
        onOpenChange={(open) => !open && setDeleteTarget(null)}
        onConfirm={async () => {
          if (!deleteTarget) return;
          await deleteMutation.mutateAsync(deleteTarget.id);
          setDeleteTarget(null);
        }}
      />
    </section>
  );
};

export default HotPicks;
