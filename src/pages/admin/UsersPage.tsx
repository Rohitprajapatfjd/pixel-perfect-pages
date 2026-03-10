import { adminApi } from '@/api/adminApi';
import AssignRoleModal from '@/components/admin/rbac/AssignRoleModal';
import UserList from '@/components/admin/rbac/UserList';
import { usePermission } from '@/hooks/usePermission';
import { AdminUser, Role } from '@/types/rbac';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const UsersPage = () => {
  const { hasPermission } = usePermission();
  const canManage = hasPermission('manage-users');

  const [users, setUsers] = useState<AdminUser[]>([]);
  const [availableRoles, setAvailableRoles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [assignUser, setAssignUser] = useState<AdminUser | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [usersData, rolesData] = await Promise.all([adminApi.getUsers(), adminApi.getRoles()]);
      setUsers(usersData);
      setAvailableRoles(rolesData.map((item: Role) => item.name));
    } catch (error) {
      toast.error((error as Error).message || 'Failed to load users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAssignRoles = async ({ userId, roles }: { userId: number; roles: string[] }) => {
    setSaving(true);
    try {
      await adminApi.assignRole(userId, { roles });
      toast.success('Roles assigned successfully.');
      setAssignUser(null);
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to assign roles.');
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveRole = async (user: AdminUser, role: string) => {
    if (!canManage) return;
    setSaving(true);
    try {
      await adminApi.removeRole(user.id, { roles: [role] });
      toast.success('Role removed successfully.');
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to remove role.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">User Role Assignment</h1>
        <p className="text-sm text-muted-foreground">Assign or remove roles and keep access up to date in real time.</p>
      </div>

      <UserList
        users={users}
        loading={loading}
        canManage={canManage}
        onManageRoles={setAssignUser}
        onRemoveRole={handleRemoveRole}
      />

      <AssignRoleModal
        open={Boolean(assignUser)}
        user={assignUser}
        availableRoles={availableRoles}
        loading={saving}
        onClose={() => setAssignUser(null)}
        onSubmit={handleAssignRoles}
      />
    </div>
  );
};

export default UsersPage;
