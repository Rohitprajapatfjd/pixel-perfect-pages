import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Role } from '@/types/rbac';

interface RoleListProps {
  roles: Role[];
  loading?: boolean;
  canManage: boolean;
  onCreate: () => void;
  onEdit: (role: Role) => void;
  onDelete: (role: Role) => void;
}

const RoleList = ({ roles, loading, canManage, onCreate, onEdit, onDelete }: RoleListProps) => (
  <Card className="shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle>Roles</CardTitle>
      {canManage ? <Button onClick={onCreate}>Create Role</Button> : null}
    </CardHeader>
    <CardContent>
      {loading ? <p className="text-sm text-muted-foreground">Loading roles...</p> : null}
      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[580px] text-left text-sm">
            <thead>
              <tr className="border-b text-muted-foreground">
                <th className="py-2">Role Name</th>
                <th className="py-2">Total Permissions</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id} className="border-b last:border-0">
                  <td className="py-3 font-medium">{role.name}</td>
                  <td className="py-3">{role.permissions.length}</td>
                  <td className="py-3">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => onEdit(role)} disabled={!canManage}>Edit</Button>
                      <Button size="sm" variant="destructive" onClick={() => onDelete(role)} disabled={!canManage}>Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </CardContent>
  </Card>
);

export default RoleList;
