import { Button } from '@/components/ui/button';
import { AdminUser } from '@/types/rbac';
import { FormEvent, useEffect, useState } from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';
import Modal from './Modal';

interface AssignRoleModalProps {
  open: boolean;
  user: AdminUser | null;
  availableRoles: string[];
  loading?: boolean;
  onClose: () => void;
  onSubmit: (payload: { userId: number; roles: string[] }) => Promise<void>;
}

const AssignRoleModal = ({ open, user, availableRoles, loading, onClose, onSubmit }: AssignRoleModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    setSelected(user?.roles ?? []);
  }, [user]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!user) return;
    if (!selected.length) {
      setError('Assign at least one role.');
      return;
    }
    setError('');
    await onSubmit({ userId: user.id, roles: selected });
  };

  return (
    <Modal
      open={open}
      onOpenChange={(next) => !next && onClose()}
      title="Assign Roles"
      description={user ? `Update roles for ${user.name}` : 'Assign roles'}
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" form="assign-role-form" disabled={loading}>{loading ? 'Saving...' : 'Save'}</Button>
        </>
      }
    >
      <form id="assign-role-form" onSubmit={handleSubmit} className="space-y-3">
        <MultiSelectDropdown options={availableRoles} selected={selected} onChange={setSelected} />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </Modal>
  );
};

export default AssignRoleModal;
