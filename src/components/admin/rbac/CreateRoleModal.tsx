import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Modal from './Modal';

interface CreateRoleModalProps {
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (name: string) => Promise<void>;
}

const CreateRoleModal = ({ open, loading, onClose, onSubmit }: CreateRoleModalProps) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      setError('Role name is required.');
      return;
    }
    setError('');
    await onSubmit(name.trim());
    setName('');
  };

  return (
    <Modal
      open={open}
      onOpenChange={(next) => !next && onClose()}
      title="Create role"
      description="Create a new role and assign permissions later."
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" form="create-role-form" disabled={loading}>{loading ? 'Creating...' : 'Create Role'}</Button>
        </>
      }
    >
      <form id="create-role-form" onSubmit={handleSubmit} className="space-y-3">
        <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Role name" />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </Modal>
  );
};

export default CreateRoleModal;
