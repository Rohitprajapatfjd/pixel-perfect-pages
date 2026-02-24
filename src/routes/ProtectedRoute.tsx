import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserRole } from "@/types/ticket";

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated || !user || !allowedRoles.includes(user.role)) {
    const fallbackRole = allowedRoles.includes("admin") ? "admin" : "merchant";
    return <Navigate to={`/login`} replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
