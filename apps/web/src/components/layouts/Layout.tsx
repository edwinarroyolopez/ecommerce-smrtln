import { Outlet, Navigate } from "react-router-dom";

const Layout = () => {
  const { user } = { user: { role: "admin" } };

  if (!user) return <Navigate to="/login" />;
  if (user.role === "admin") return <AdminLayout />;
  if (user.role === "client") return <ClientLayout />;

  return <Outlet />;
};

const AdminLayout = () => {
  return (
    <div>
      <h1>Panel de Administración</h1>
      <Outlet />
    </div>
  );
};

const ClientLayout = () => {
  return (
    <div>
      <h1>Aplicación del Cliente</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
