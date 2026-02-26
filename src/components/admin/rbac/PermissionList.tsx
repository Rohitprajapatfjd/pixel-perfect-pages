import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Permission } from '@/types/rbac';
import PermissionGroupCard from './PermissionGroupCard';

interface PermissionListProps {
  permissions: Permission[];
  loading?: boolean;
  canManage: boolean;
  onCreate: () => void;
}

const defaultGroups = ['HR', 'Reports', 'Career', 'Finance'];

const PermissionList = ({ permissions, loading, canManage, onCreate }: PermissionListProps) => {
  const grouped = permissions.reduce<Record<string, Permission[]>>((acc, permission) => {
    const key = permission.group || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(permission);
    return acc;
  }, {});

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Permissions</CardTitle>
        {canManage ? <Button onClick={onCreate}>Create Permission</Button> : null}
      </CardHeader>
      <CardContent>
        {loading ? <p className="text-sm text-muted-foreground">Loading permissions...</p> : null}
        {!loading && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {defaultGroups.map((group) => (
              <PermissionGroupCard key={group} group={group} permissions={grouped[group] ?? []} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PermissionList;
