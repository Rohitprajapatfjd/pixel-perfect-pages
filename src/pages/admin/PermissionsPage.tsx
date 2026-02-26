import { adminApi } from '@/api/adminApi';
import CreatePermissionModal from '@/components/admin/rbac/CreatePermissionModal';
import PermissionList from '@/components/admin/rbac/PermissionList';
import { usePermission } from '@/hooks/usePermission';
import { Permission } from '@/types/rbac';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const PermissionsPage = () => {
  const { hasPermission } = usePermission();
  const canManage = hasPermission('manage-permissions');

  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const response = await adminApi.getPermissions();
      setPermissions(response);
    } catch (error) {
      toast.error((error as Error).message || 'Failed to load permissions.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreate = async (payload: { name: string; group: string }) => {
    setSaving(true);
    try {
      await adminApi.createPermission(payload);
      toast.success('Permission created successfully.');
      setCreateOpen(false);
      await loadData();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to create permission.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Permission Management</h1>
        <p className="text-sm text-muted-foreground">Organize and maintain access controls by category.</p>
      </div>

      <PermissionList permissions={permissions} loading={loading} canManage={canManage} onCreate={() => setCreateOpen(true)} />
      <CreatePermissionModal open={createOpen} onClose={() => setCreateOpen(false)} onSubmit={handleCreate} loading={saving} />
    </div>
  );
};

export default PermissionsPage;
