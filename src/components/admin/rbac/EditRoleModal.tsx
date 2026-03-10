import { FormEvent, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Permission, Role } from '@/types/rbac';
import Modal from './Modal';
import PermissionCheckboxGroup from './PermissionCheckboxGroup';

interface EditRoleModalProps {
  role: Role | null;
  permissions: Permission[];
  loading?: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: { id: number; name: string; permissions: string[] }) => Promise<void>;
}

const EditRoleModal = ({ role, permissions, loading, open, onClose, onSubmit }: EditRoleModalProps) => {
  const [name, setName] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!role) return;
    setName(role.name);
    setSelectedPermissions(role.permissions.map((item) => item.name));
  }, [role]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!role) return;
    if (!name.trim()) {
      setError('Role name is required.');
      return;
    }
    setError('');
    await onSubmit({ id: role.id, name: name.trim(), permissions: selectedPermissions });
  };

  return (
    <Modal
      open={open}
      onOpenChange={(next) => !next && onClose()}
      title="Edit role"
      description="Update role details and synchronize permissions."
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" form="edit-role-form" disabled={loading}>{loading ? 'Saving...' : 'Save Changes'}</Button>
        </>
      }
    >
      <form id="edit-role-form" onSubmit={handleSubmit} className="space-y-4">
        <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Role name" />
        <PermissionCheckboxGroup permissions={permissions} selected={selectedPermissions} onChange={setSelectedPermissions} />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </Modal>
  );
};

export default EditRoleModal;
