import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { PermissionSection, UserRecord } from '@/types/userManagement';

interface PermissionModalProps {
  open: boolean;
  user: UserRecord | null;
  sections: PermissionSection[];
  selectedPermissions: string[];
  onTogglePermission: (permission: string) => void;
  onToggleSection: (section: PermissionSection, enabled: boolean) => void;
  onClose: () => void;
  onSave: () => void;
  saving: boolean;
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
          exit={{ opacity: 0, y: 20 }}
          className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <div className="flex items-center justify-between border-b px-6 py-4">
            <div>
              <h2 className="text-lg font-semibold">Manage Permissions</h2>
              <p className="text-sm text-muted-foreground">
                {user.name} <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">{user.role}</span>
              </p>
            </div>
            <button className="rounded-lg p-2 hover:bg-muted" onClick={onClose}><X className="h-4 w-4" /></button>
          </div>

          <div className="space-y-4 overflow-y-auto p-6">
            {sections.map((section) => {
              const sectionPermissions = section.items.map((item) => item.key);
              const sectionOn = sectionPermissions.every((permission) => selectedPermissions.includes(permission));

              return (
                <div key={section.key} className="rounded-xl border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold">{section.label}</h3>
                    <label className="flex items-center gap-2 text-sm">
                      <span>All On</span>
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded"
                        checked={sectionOn}
                        onChange={(event) => onToggleSection(section, event.target.checked)}
                      />
                    </label>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {section.items.map((permission) => (
                      <label key={permission.key} className="flex items-center justify-between rounded-lg bg-muted/40 p-3 text-sm">
                        <span>{permission.label}</span>
                        <button
                          onClick={() => onTogglePermission(permission.key)}
                          className={`relative h-6 w-11 rounded-full transition ${selectedPermissions.includes(permission.key) ? 'bg-primary' : 'bg-slate-300'}`}
                        >
                          <span
                            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition ${selectedPermissions.includes(permission.key) ? 'left-5' : 'left-0.5'}`}
                          />
                        </button>
                      </label>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end gap-3 border-t px-6 py-4">
            <button className="rounded-xl border px-4 py-2 text-sm" onClick={onClose}>Cancel</button>
            <button className="rounded-xl bg-primary px-4 py-2 text-sm text-white disabled:opacity-60" onClick={onSave} disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PermissionModal;
