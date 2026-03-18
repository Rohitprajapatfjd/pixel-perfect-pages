import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import PermissionGroup from '@/components/PermissionGroup';
import { PermissionSection, UserPermissionPayload } from '@/types/userManagement';
import { Skeleton } from '@/components/ui/skeleton';

interface PermissionModalProps {
  open: boolean;
  user: UserPermissionPayload | null;
  sections: PermissionSection[];
  selectedPermissions: string[];
  onTogglePermission: (permission: string) => void;
  onToggleSection: (section: PermissionSection, enabled: boolean) => void;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
  loading: boolean;
}

const PermissionModal = ({
  open,
  user,
  sections,
  selectedPermissions,
  onTogglePermission,
  onToggleSection,
  onClose,
  onSave,
  saving,
  loading,
}: PermissionModalProps) => (
  <AnimatePresence>
    {open && user && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold">Permissions — {user.name}</h2>
              <p className="text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{user.role}</span>
              </p>
            </div>
            <button className="rounded-lg p-2 hover:bg-muted" onClick={onClose}>
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto bg-slate-50 p-6">
            {loading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <Skeleton className="mb-3 h-5 w-48" />
                    <div className="grid gap-2 sm:grid-cols-2">
                      <Skeleton className="h-14 w-full" />
                      <Skeleton className="h-14 w-full" />
                    </div>
                  </div>
                ))
              : sections.map((section) => (
                  <PermissionGroup
                    key={section.key}
                    section={section}
                    selectedPermissions={selectedPermissions}
                    disabled={saving}
                    onTogglePermission={onTogglePermission}
                    onToggleSection={onToggleSection}
                  />
                ))}
          </div>

          <div className="flex justify-end gap-3 border-t px-6 py-4">
            <button className="rounded-xl border px-4 py-2 text-sm" onClick={onClose} disabled={saving}>
              Cancel
            </button>
            <button
              className="rounded-xl bg-primary px-4 py-2 text-sm text-white disabled:opacity-60"
              onClick={onSave}
              disabled={saving || loading}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PermissionModal;
