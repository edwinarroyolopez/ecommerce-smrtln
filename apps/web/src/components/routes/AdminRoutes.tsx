import { Routes, Route } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AdminLayout from "@components/admin/layouts/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/dashboard";
import Users from "@/pages/admin/users";
import Settings from "@/pages/admin/settings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="admin" redirectTo="/" />}>
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
