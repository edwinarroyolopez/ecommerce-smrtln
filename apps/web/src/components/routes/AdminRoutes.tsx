import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AdminLayout from "@components/admin/layouts/AdminLayout/AdminLayout";
import { RouteConfig } from "@src/types/routes";

const Dashboard = lazy(() => import("@/pages/admin/dashboard"));


const adminRoutes: RouteConfig[] = [
  { path: "dashboard", element: <Dashboard /> }
];

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="admin" redirectTo="/" />}>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {adminRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
