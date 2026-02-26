import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Permission } from '@/types/rbac';

interface PermissionGroupCardProps {
  group: string;
  permissions: Permission[];
}

const PermissionGroupCard = ({ group, permissions }: PermissionGroupCardProps) => (
  <Card className="shadow-sm">
    <CardHeader>
      <CardTitle className="text-base">{group}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-2">
      {permissions.map((permission) => (
        <div key={permission.id} className="rounded-md border bg-secondary/40 px-3 py-2 text-sm">
          {permission.name}
        </div>
      ))}
    </CardContent>
  </Card>
);

export default PermissionGroupCard;
