import { PermissionSection } from '@/types/userManagement';
import PermissionToggle from '@/components/PermissionToggle';

interface PermissionGroupProps {
  section: PermissionSection;
  selectedPermissions: string[];
  disabled?: boolean;
  onTogglePermission: (permission: string) => void;
  onToggleSection: (section: PermissionSection, enabled: boolean) => void;
}

const PermissionGroup = ({
  section,
  selectedPermissions,
  disabled,
  onTogglePermission,
  onToggleSection,
}: PermissionGroupProps) => {
  const sectionKeys = section.items.map((item) => item.key);
  const enabledCount = sectionKeys.filter((key) => selectedPermissions.includes(key)).length;
  const allEnabled = sectionKeys.length > 0 && enabledCount === sectionKeys.length;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{section.label}</h3>
          <p className="text-xs text-slate-500">{enabledCount}/{sectionKeys.length} enabled</p>
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <span>All On</span>
          <input
            type="checkbox"
            checked={allEnabled}
            disabled={disabled}
            onChange={(event) => onToggleSection(section, event.target.checked)}
            className="h-4 w-4 rounded border-slate-300"
          />
        </label>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {section.items.map((permission) => (
          <PermissionToggle
            key={permission.key}
            label={permission.label}
            description={permission.description}
            checked={selectedPermissions.includes(permission.key)}
            disabled={disabled}
            onChange={() => onTogglePermission(permission.key)}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionGroup;
