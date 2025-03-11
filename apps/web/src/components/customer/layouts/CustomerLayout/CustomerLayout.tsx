import { Outlet } from "react-router-dom";
import { useState } from "react";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./CustomerLayout.module.css";
import { Route } from "@src/types/routes";
import { useAuthStore } from "@/store/useAuthStore";

const customerRoutes: Route[] = [
  { path: "/invoices", label: "Facturas" },
  { path: "/products", label: "Productos" },
];

const CustomerLayout = () => {
  const user = useAuthStore((state) => state.user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container} data-testid="customer-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} routes={customerRoutes} title={"Customer Panel"} />
      <Topbar title={`Dashboard: ${user?.username}`} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
