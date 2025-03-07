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
    <Sidebar routes={customerRoutes} title={"Customer Panel"} />
    <div className={styles.content}>
      <Topbar title={"Custromer Dashboard"}/>
      <div className={styles.mainContent}>
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default CustomerLayout;
