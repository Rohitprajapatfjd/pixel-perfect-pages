import { useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Eye, EyeOff, KeyRound, Lock, LockOpen, Pencil, Trash2 } from 'lucide-react';
import { UserRecord } from '@/types/userManagement';

interface UserRowProps {
  user: UserRecord;
  onEdit: (user: UserRecord) => void;
  onDelete: (user: UserRecord) => void;
  onToggleStatus: (user: UserRecord) => void;
  onManagePermissions: (user: UserRecord) => void;
}

const roleClasses: Record<UserRecord['role'], string> = {
  Admin: 'bg-blue-100 text-blue-700',
  'Sub-Agent': 'bg-orange-100 text-orange-700',
  Staff: 'bg-slate-200 text-slate-700',
};

const statusClasses: Record<UserRecord['status'], string> = {
  Active: 'bg-emerald-100 text-emerald-700',
  Suspended: 'bg-rose-100 text-rose-700',
};

const initials = (name: string) =>
  name
    .split(' ')
    .map((item) => item[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const UserRow = ({ user, onEdit, onDelete, onToggleStatus, onManagePermissions }: UserRowProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.tr whileHover={{ scale: 1.01 }} className="border-b last:border-b-0">
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">{initials(user.name)}</div>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-semibold ${roleClasses[user.role]}`}>{user.role}</span></td>
      <td className="px-4 py-3">
        <button className="flex items-center gap-2 text-sm" onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? user.password : '••••••••'}
          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </td>
      <td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusClasses[user.status]}`}>{user.status}</span></td>
      <td className="px-4 py-3 text-sm font-medium">{user.permissions.length}/25</td>
      <td className="px-4 py-3 text-sm text-muted-foreground">{format(new Date(user.lastLogin), 'dd MMM yyyy, HH:mm')}</td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <button className="rounded-lg p-2 transition hover:bg-muted" onClick={() => onManagePermissions(user)}><KeyRound className="h-4 w-4" /></button>
          <button className="rounded-lg p-2 transition hover:bg-muted" onClick={() => onEdit(user)}><Pencil className="h-4 w-4" /></button>
          <button className="rounded-lg p-2 transition hover:bg-muted" onClick={() => onToggleStatus(user)}>
            {user.status === 'Active' ? <Lock className="h-4 w-4" /> : <LockOpen className="h-4 w-4" />}
          </button>
          <button className="rounded-lg p-2 text-rose-600 transition hover:bg-rose-50" onClick={() => onDelete(user)}><Trash2 className="h-4 w-4" /></button>
        </div>
      </td>
    </motion.tr>
  );
};

export default UserRow;
