import { Outlet } from "react-router-dom";
import { useState } from "react";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import BottomBar from "@components/common/BottomBar/BottomBar";
import styles from "./CustomerLayout.module.css";
import { Route } from "@src/types/routes";
import { useAuthStore } from "@/store/useAuthStore";
import { PlusIcon, NavbarIcon } from "ecommerce-smrtln-ui";

const customerRoutes: Route[] = [
  { path: "/invoices", label: "Facturas" },
  { path: "/products", label: "Productos" },
];

const CustomerLayout = () => {
  const user = useAuthStore((state) => state.user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const bottomBarIcons = [
    {
      icon: <PlusIcon />,
      onClick: () => {
        console.log("Home clicked");
      },
      label: "Inicio"
    },
    {
      icon: <NavbarIcon />,
      onClick: () => {
        setSidebarOpen(!isSidebarOpen);
      },
      // label: "Menú"
    }
  ];

  return (
    <div className={styles.container} data-testid="customer-layout">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} routes={customerRoutes} title={"Customer Panel"} />
      <Topbar title={`Dashboard: ${user?.username}`} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
      <BottomBar icons={bottomBarIcons} />
    </div>
  );
};

export default CustomerLayout;
