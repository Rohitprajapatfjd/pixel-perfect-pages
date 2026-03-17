import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { userManagementApi } from '@/services/userManagementApi';
import { PermissionApiItem, PermissionSection } from '@/types/userManagement';

export const PERMISSIONS_QUERY_KEY = 'permissions';

const toLabel = (value: string) =>
  value
    .replace(/[._-]/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => `${word[0]?.toUpperCase() ?? ''}${word.slice(1)}`)
    .join(' ');

export const usePermissions = () => {
  const permissionsQuery = useQuery({
    queryKey: [PERMISSIONS_QUERY_KEY],
    queryFn: userManagementApi.getPermissions,
  });

  const groupedPermissions = useMemo<PermissionSection[]>(() => {
    const grouped = (permissionsQuery.data ?? []).reduce<Record<string, PermissionApiItem[]>>((acc, permission) => {
      const group = permission.group?.trim() || 'General';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(permission);
      return acc;
    }, {});

    return Object.entries(grouped).map(([group, permissions]) => ({
      key: group.toLowerCase().replace(/\s+/g, '-'),
      label: group,
      items: permissions.map((permission) => ({
        key: permission.name,
        label: toLabel(permission.name),
        description: `Access ${permission.name}`,
      })),
    }));
  }, [permissionsQuery.data]);

  return {
    permissionsQuery,
    groupedPermissions,
  };
};
