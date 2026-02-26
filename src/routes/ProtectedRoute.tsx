import { useAuth } from '@/context/AuthContext';
import { usePermission } from '@/hooks/usePermission';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  allowedRoles?: string[];
  permission?: string;
}

const ProtectedRoute = ({ allowedRoles, permission }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const { hasPermission } = usePermission();
  const location = useLocation();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (allowedRoles?.length && !allowedRoles.some((role) => user.roles.includes(role))) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (permission && !hasPermission(permission)) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
