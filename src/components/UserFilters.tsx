import { Search } from 'lucide-react';
import { UserFiltersState } from '@/types/userManagement';

interface UserFiltersProps {
  filters: UserFiltersState;
  onChange: (next: UserFiltersState) => void;
}

const UserFilters = ({ filters, onChange }: UserFiltersProps) => (
  <div className="rounded-2xl border bg-card p-4 shadow-sm">
    <div className="grid gap-3 md:grid-cols-3">
      <label className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={filters.search}
          onChange={(event) => onChange({ ...filters, search: event.target.value })}
          placeholder="Search user by name or email"
          className="h-10 w-full rounded-xl border bg-background pl-9 pr-3 text-sm outline-none ring-primary/30 transition focus:ring"
        />
      </label>

      <select
        value={filters.role}
        onChange={(event) => onChange({ ...filters, role: event.target.value as UserFiltersState['role'] })}
        className="h-10 rounded-xl border bg-background px-3 text-sm outline-none ring-primary/30 transition focus:ring"
      >
        <option value="All">All roles</option>
        <option value="Admin">Admin</option>
        <option value="Sub-Agent">Sub-Agent</option>
        <option value="Staff">Staff</option>
      </select>

      <select
        value={filters.status}
        onChange={(event) => onChange({ ...filters, status: event.target.value as UserFiltersState['status'] })}
        className="h-10 rounded-xl border bg-background px-3 text-sm outline-none ring-primary/30 transition focus:ring"
      >
        <option value="All">All statuses</option>
        <option value="Active">Active</option>
        <option value="Suspended">Suspended</option>
      </select>
    </div>
  </div>
);

export default UserFilters;
