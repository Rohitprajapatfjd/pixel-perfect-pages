import { Button } from '@/components/ui/button';
import Modal from './Modal';

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirming?: boolean;
}

const ConfirmDialog = ({ open, title, description, onConfirm, onCancel, confirming }: ConfirmDialogProps) => (
  <Modal
    open={open}
    onOpenChange={(next) => {
      if (!next) onCancel();
    }}
    title={title}
    description={description}
    footer={(
      <>
        <Button variant="outline" onClick={onCancel} disabled={confirming}>Cancel</Button>
        <Button variant="destructive" onClick={onConfirm} disabled={confirming}>
          {confirming ? 'Deleting...' : 'Delete'}
        </Button>
      </>
    )}
  >
    <p className="text-sm text-muted-foreground">This action cannot be undone.</p>
  </Modal>
);

export default ConfirmDialog;
