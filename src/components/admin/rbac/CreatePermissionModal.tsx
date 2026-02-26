import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Modal from './Modal';

interface CreatePermissionModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: { name: string; group: string }) => Promise<void>;
  loading?: boolean;
}

const groups = ['HR', 'Reports', 'Career', 'Finance'];

const CreatePermissionModal = ({ open, onClose, onSubmit, loading }: CreatePermissionModalProps) => {
  const [name, setName] = useState('');
  const [group, setGroup] = useState('HR');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!name.trim()) {
      setError('Permission name is required.');
      return;
    }
    setError('');
    await onSubmit({ name: name.trim(), group });
    setName('');
    setGroup('HR');
  };

  return (
    <Modal
      open={open}
      onOpenChange={(next) => !next && onClose()}
      title="Create Permission"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit" form="create-permission-form" disabled={loading}>{loading ? 'Creating...' : 'Create'}</Button>
        </>
      }
    >
      <form id="create-permission-form" onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Permission Name</Label>
          <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="manage-hr" />
        </div>
        <div>
          <Label>Group</Label>
          <Select value={group} onValueChange={setGroup}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {groups.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </form>
    </Modal>
  );
};

export default CreatePermissionModal;
