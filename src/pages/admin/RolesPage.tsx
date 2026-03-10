import { adminApi } from '@/api/adminApi';
import ConfirmDialog from '@/components/admin/rbac/ConfirmDialog';
import CreateRoleModal from '@/components/admin/rbac/CreateRoleModal';
import EditRoleModal from '@/components/admin/rbac/EditRoleModal';
import RoleList from '@/components/admin/rbac/RoleList';
import { usePermission } from '@/hooks/usePermission';
import { Permission, Role } from '@/types/rbac';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const RolesPage = () => {
  const { hasPermission } = usePermission();
  const canManage = hasPermission('manage-roles');

  const [roles, setRoles] = useState<Role[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [editRole, setEditRole] = useState<Role | null>(null);
  const [deleteRole, setDeleteRole] = useState<Role | null>(null);

  const loadData = async () => {
    setLoading(true);
    try {
      const [rolesData, permissionsData] = await Promise.all([adminApi.getRoles(), adminApi.getPermissions()]);
      setRoles(rolesData);
      setPermissions(permissionsData);
    } catch (error) {
      toast.error((error as Error).message || 'Failed to load roles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (name: string) => {
    setSaving(true);
    try {
      await adminApi.createRole({ name });
      toast.success('Role created successfully.');
      setCreateOpen(false);
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to create role.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async (payload: { id: number; name: string; permissions: string[] }) => {
    setSaving(true);
    try {
      await adminApi.updateRole(payload.id, { name: payload.name });
      await adminApi.syncRolePermissions(payload.id, { permissions: payload.permissions });
      toast.success('Role updated successfully.');
      setEditRole(null);
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to update role.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteRole) return;
    setSaving(true);
    try {
      await adminApi.deleteRole(deleteRole.id);
      toast.success('Role deleted successfully.');
      setDeleteRole(null);
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to delete role.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Role Management</h1>
        <p className="text-sm text-muted-foreground">Manage roles and sync permissions for each role.</p>
      </div>

      <RoleList
        roles={roles}
        loading={loading}
        canManage={canManage}
        onCreate={() => setCreateOpen(true)}
        onEdit={setEditRole}
        onDelete={setDeleteRole}
      />

      <CreateRoleModal open={createOpen} onClose={() => setCreateOpen(false)} onSubmit={handleCreate} loading={saving} />
      <EditRoleModal open={Boolean(editRole)} role={editRole} permissions={permissions} onClose={() => setEditRole(null)} onSubmit={handleEdit} loading={saving} />
      <ConfirmDialog
        open={Boolean(deleteRole)}
        title="Delete role"
        description={`Are you sure you want to delete ${deleteRole?.name || 'this role'}?`}
        onCancel={() => setDeleteRole(null)}
        onConfirm={handleDelete}
        confirming={saving}
      />
    </div>
  );
};

export default RolesPage;
