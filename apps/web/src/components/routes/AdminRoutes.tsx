import { Routes, Route } from "react-router-dom";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AdminLayout from "@components/admin/layouts/AdminLayout/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import Users from "@/pages/admin/Users";
import Settings from "@/pages/admin/Settings";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<RoleProtectedRoute allowedRole="admin" redirectTo="/client" />}>
        <Route path="/admin"  element={<AdminLayout  />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
