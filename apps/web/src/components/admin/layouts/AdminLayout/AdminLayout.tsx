import { Outlet } from "react-router-dom";
import { useState } from "react";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./AdminLayout.module.css";
import { Route } from "@src/types/routes";
import { useAuthStore } from "@/store/useAuthStore";

const adminRoutes: Route[] = [
  { path: "/admin/dashboard", label: "Dashboard" },
  { path: "/admin/users", label: "Usuarios" },
  { path: "/admin/settings", label: "Configuración" },
];

const AdminLayout = () => {
  const user = useAuthStore((state) => state.user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} routes={adminRoutes} title={"Admin Panel"} />
      <Topbar title={`Dashboard: ${user?.username}`} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
