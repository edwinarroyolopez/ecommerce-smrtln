import { Outlet } from "react-router-dom";
import Topbar from "@components/common/Topbar/Topbar";
import Sidebar from "@components/common/Sidebar/Sidebar";
import styles from "./CustomerLayout.module.css";

import { Route } from "@src/types/routes";

const customerRoutes: Route[] = [
  { path: "/checkout", label: "Checkout" },
  { path: "/invoices", label: "Facturas" },
  { path: "/products", label: "Productos" },
];

const CustomerLayout = () => {
  return (
    <div className={styles.container}>
      <Sidebar routes={customerRoutes}>
        <h2 className={styles.title}>Customer Panel</h2>
      </Sidebar>
      <div className={styles.content}>
        <Topbar>
          <h1>Customer Dashboard</h1>
        </Topbar>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
