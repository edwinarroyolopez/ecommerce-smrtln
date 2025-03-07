import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";

interface RoleProtectedRouteProps {
  allowedRole: string;
  redirectTo: string;
}

const RoleProtectedRoute = ({ allowedRole, redirectTo }: RoleProtectedRouteProps) => {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== allowedRole) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default RoleProtectedRoute;
