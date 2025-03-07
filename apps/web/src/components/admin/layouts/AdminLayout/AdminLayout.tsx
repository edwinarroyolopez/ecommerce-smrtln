import { Outlet } from "react-router-dom";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./AdminLayout.module.css";

import { Route } from "@src/types/routes";

const adminRoutes: Route[] = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/users", label: "Usuarios" },
    { path: "/admin/settings", label: "Configuración" },
  ];

  
const AdminLayout = () => {
  return (
    <div className={styles.container}>
        <Sidebar routes={adminRoutes}>
        <h2 className={styles.title}>Admin Panel</h2>
      </Sidebar>
      <div className={styles.content}>
        <Topbar>
          <h1>Admin Dashboard</h1>
        </Topbar>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
