interface RoleBadgeProps {
  role: string;
}

const RoleBadge = ({ role }: RoleBadgeProps) => (
  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">{role}</span>
);

export default RoleBadge;
