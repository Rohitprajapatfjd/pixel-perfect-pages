import { useMemo } from 'react';
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

const PermissionList = ({ permissions, loading, canManage, onCreate }: PermissionListProps) => {
  const groupedEntries = useMemo(() => {
    const grouped = permissions.reduce<Record<string, Permission[]>>((acc, permission) => {
      const key = permission.group?.trim() || 'Other';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(permission);
      return acc;
    }, {});

    return Object.entries(grouped)
      .map(([group, groupPermissions]) => [
        group,
        [...groupPermissions].sort((a, b) => a.name.localeCompare(b.name)),
      ] as const)
      .sort(([a], [b]) => a.localeCompare(b));
  }, [permissions]);

  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Permissions</CardTitle>
        {canManage ? <Button onClick={onCreate}>Create Permission</Button> : null}
      </CardHeader>
      <CardContent>
        {loading ? <p className="text-sm text-muted-foreground">Loading permissions...</p> : null}

        {!loading && groupedEntries.length === 0 ? (
          <p className="text-sm text-muted-foreground">No permissions found.</p>
        ) : null}

        {!loading && groupedEntries.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {groupedEntries.map(([group, groupPermissions]) => (
              <PermissionGroupCard key={group} group={group} permissions={groupPermissions} />
            ))}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default PermissionList;
