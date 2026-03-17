import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import PermissionModal from '@/components/PermissionModal';
import SkeletonLoader from '@/components/SkeletonLoader';
import StatsCards from '@/components/StatsCards';
import UserFilters from '@/components/UserFilters';
import UserTable from '@/components/UserTable';
import { usePermissions } from '@/hooks/usePermissions';
import { useUpdateUser } from '@/hooks/useUpdateUser';
import { useUsers } from '@/hooks/useUsers';
import { UpsertUserPayload, UserFiltersState, UserRecord } from '@/types/userManagement';
import { toast } from 'sonner';

const initialFilters: UserFiltersState = {
  search: '',
  role: 'All',
  status: 'All',
};

const initialForm: UpsertUserPayload = {
  name: '',
  email: '',
  mobile: '',
  role: 'Staff',
  password: '',
};

const UsersPage = () => {
  const [filters, setFilters] = useState<UserFiltersState>(initialFilters);
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [form, setForm] = useState<UpsertUserPayload>(initialForm);
  const [permissionUser, setPermissionUser] = useState<UserRecord | null>(null);
  const [localPermissions, setLocalPermissions] = useState<string[]>([]);

  const { data: users = [], isLoading, stats } = useUsers(filters);
  const { sectionsQuery, updatePermissions } = usePermissions();
  const { createUser, updateUser, deleteUser, updateStatus } = useUpdateUser();

  const permissionSections = sectionsQuery.data ?? [];

  const resetForm = () => {
    setEditingUser(null);
    setIsUserModalOpen(false);
    setForm(initialForm);
  };

  const openCreateModal = () => {
    setEditingUser(null);
    setIsUserModalOpen(true);
    setForm(initialForm);
  };

  const openEditModal = (user: UserRecord) => {
    setEditingUser(user);
    setIsUserModalOpen(true);
    setForm({
      name: user.name,
      email: user.email,
      mobile: user.mobile,
      role: user.role,
      password: user.password,
    });
  };

  const submitUser = async () => {
    try {
      if (editingUser) {
        await updateUser.mutateAsync({ id: editingUser.id, payload: form });
        toast.success('User updated successfully');
      } else {
        await createUser.mutateAsync(form);
        toast.success('User created successfully');
      }
      resetForm();
    } catch (error) {
      toast.error((error as Error).message || 'Unable to save user');
    }
  };

  const selectedPermissionsCount = useMemo(() => localPermissions.length, [localPermissions]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">User Management Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage users, statuses, roles, and permissions from one place.</p>
        </div>
        <motion.button whileHover={{ y: -1 }} className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-white" onClick={openCreateModal}>
          <Plus className="h-4 w-4" /> Add User
        </motion.button>
      </div>

      <StatsCards stats={stats} />
      <UserFilters filters={filters} onChange={setFilters} />

      <UserTable
        users={users}
        onEdit={openEditModal}
        onDelete={async (user) => {
          await deleteUser.mutateAsync(user.id);
          toast.success('User deleted');
        }}
        onToggleStatus={async (user) => {
          const status = user.status === 'Active' ? 'Suspended' : 'Active';
          await updateStatus.mutateAsync({ id: user.id, status });
          toast.success(`User ${status === 'Active' ? 'unlocked' : 'suspended'}`);
        }}
        onManagePermissions={(user) => {
          setPermissionUser(user);
          setLocalPermissions(user.permissions);
        }}
      />

      <PermissionModal
        open={Boolean(permissionUser)}
        user={permissionUser}
        sections={permissionSections}
        selectedPermissions={localPermissions}
        saving={updatePermissions.isPending}
        onTogglePermission={(permission) => {
          setLocalPermissions((prev) =>
            prev.includes(permission) ? prev.filter((item) => item !== permission) : [...prev, permission],
          );
        }}
        onToggleSection={(section, enabled) => {
          const sectionKeys = section.items.map((item) => item.key);
          setLocalPermissions((prev) => {
            if (enabled) {
              return Array.from(new Set([...prev, ...sectionKeys]));
            }
            return prev.filter((item) => !sectionKeys.includes(item));
          });
        }}
        onClose={() => setPermissionUser(null)}
        onSave={async () => {
          if (!permissionUser) return;
          await updatePermissions.mutateAsync({ id: permissionUser.id, permissions: localPermissions });
          setPermissionUser(null);
          toast.success(`Permissions saved (${selectedPermissionsCount})`);
        }}
      />

      {isUserModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="mb-4 text-xl font-semibold">{editingUser ? 'Edit user' : 'Add new user'}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {(['name', 'email', 'mobile', 'password'] as const).map((field) => (
                <input
                  key={field}
                  placeholder={field[0].toUpperCase() + field.slice(1)}
                  value={form[field]}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))}
                  className="h-10 rounded-xl border px-3"
                />
              ))}
              <select
                className="h-10 rounded-xl border px-3"
                value={form.role}
                onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value as UpsertUserPayload['role'] }))}
              >
                <option value="Admin">Admin</option>
                <option value="Sub-Agent">Sub-Agent</option>
                <option value="Staff">Staff</option>
              </select>
            </div>

            <div className="mt-5 flex justify-end gap-3">
              <button className="rounded-xl border px-4 py-2" onClick={resetForm}>Cancel</button>
              <button className="rounded-xl bg-primary px-4 py-2 text-white" onClick={submitUser}>
                {editingUser ? 'Update User' : 'Create User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
