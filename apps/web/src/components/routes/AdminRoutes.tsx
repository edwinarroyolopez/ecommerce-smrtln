import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AdminLayout from "@components/admin/layouts/AdminLayout/AdminLayout";
import { RouteConfig } from "@src/types/routes";

const Dashboard = lazy(() => import("@/pages/admin/dashboard"));
const Users = lazy(() => import("@/pages/admin/users"));
const Settings = lazy(() => import("@/pages/admin/settings"));

const adminRoutes: RouteConfig[] = [
  { path: "dashboard", element: <Dashboard /> },
  { path: "users", element: <Users /> },
  { path: "settings", element: <Settings /> },
];

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="admin" redirectTo="/" />}>
        <Route path="/" element={<AdminLayout />}>
          {adminRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
