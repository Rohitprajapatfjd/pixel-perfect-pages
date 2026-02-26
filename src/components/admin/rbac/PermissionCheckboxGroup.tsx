import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Permission } from '@/types/rbac';

type GroupedPermissions = Record<string, Permission[]>;

interface PermissionCheckboxGroupProps {
  permissions: Permission[];
  selected: string[];
  onChange: (permissions: string[]) => void;
}

const PermissionCheckboxGroup = ({ permissions, selected, onChange }: PermissionCheckboxGroupProps) => {
  const grouped = permissions.reduce<GroupedPermissions>((acc, permission) => {
    const key = permission.group || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(permission);
    return acc;
  }, {});

  const toggle = (permissionName: string) => {
    if (selected.includes(permissionName)) {
      onChange(selected.filter((item) => item !== permissionName));
      return;
    }
    onChange([...selected, permissionName]);
  };

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([group, values]) => (
        <div key={group} className="rounded-lg border p-3">
          <h4 className="mb-2 text-sm font-semibold text-foreground">{group}</h4>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {values.map((permission) => (
              <Label key={permission.id} className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-secondary">
                <Checkbox
                  checked={selected.includes(permission.name)}
                  onCheckedChange={() => toggle(permission.name)}
                />
                <span className="text-sm">{permission.name}</span>
              </Label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PermissionCheckboxGroup;
