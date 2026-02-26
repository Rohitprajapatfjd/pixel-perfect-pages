import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AdminUser } from '@/types/rbac';
import RoleBadge from './RoleBadge';
import { X } from 'lucide-react';

interface UserListProps {
  users: AdminUser[];
  loading?: boolean;
  canManage: boolean;
  onManageRoles: (user: AdminUser) => void;
  onRemoveRole: (user: AdminUser, role: string) => void;
}

const UserList = ({ users, loading, canManage, onManageRoles, onRemoveRole }: UserListProps) => (
  <Card className="shadow-sm">
    <CardHeader>
      <CardTitle>Users</CardTitle>
    </CardHeader>
    <CardContent>
      {loading ? <p className="text-sm text-muted-foreground">Loading users...</p> : null}
      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] text-sm">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Roles</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b last:border-0">
                  <td className="py-3 font-medium">{user.name}</td>
                  <td className="py-3">{user.email}</td>
                  <td className="py-3">
                    <div className="flex flex-wrap gap-2">
                      {user.roles.map((role) => (
                        <div key={role} className="flex items-center gap-1">
                          <RoleBadge role={role} />
                          <button
                            type="button"
                            className="rounded-full border p-0.5 text-muted-foreground hover:bg-secondary disabled:opacity-60"
                            onClick={() => onRemoveRole(user, role)}
                            disabled={!canManage}
                            aria-label={`Remove ${role} role from ${user.name}`}
                            title={`Remove ${role}`}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="py-3">
                    <Button size="sm" onClick={() => onManageRoles(user)} disabled={!canManage}>Assign Role</Button>
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

export default UserList;
