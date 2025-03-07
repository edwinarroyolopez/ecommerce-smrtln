import { Outlet } from "react-router-dom";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./AdminLayout.module.css";
import { Route } from "@src/types/routes";

// Mueve adminRoutes fuera del componente para evitar recrearlo en cada render
const adminRoutes: Route[] = [
  { path: "/admin/dashboard", label: "Dashboard" },
  { path: "/admin/users", label: "Usuarios" },
  { path: "/admin/settings", label: "Configuración" },
];

const AdminLayout = () => (
  <div className={styles.container}>
    <Sidebar routes={adminRoutes} title={"Admin Panel"} />
    <div className={styles.content}>
      <Topbar title={"Admin Dashboard"}/>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  </div>
);

export default AdminLayout;
