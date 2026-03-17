import UserRow from '@/components/UserRow';
import { UserRecord } from '@/types/userManagement';

interface UserTableProps {
  users: UserRecord[];
  onEdit: (user: UserRecord) => void;
  onDelete: (user: UserRecord) => void;
  onToggleStatus: (user: UserRecord) => void;
  onManagePermissions: (user: UserRecord) => void;
}

const UserTable = ({ users, onEdit, onDelete, onToggleStatus, onManagePermissions }: UserTableProps) => (
  <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
          <tr>
            <th className="px-4 py-3">User</th>
            <th className="px-4 py-3">Role</th>
            <th className="px-4 py-3">Password</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Permissions</th>
            <th className="px-4 py-3">Last Login</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={onEdit}
              onDelete={onDelete}
              onToggleStatus={onToggleStatus}
              onManagePermissions={onManagePermissions}
            />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserTable;
