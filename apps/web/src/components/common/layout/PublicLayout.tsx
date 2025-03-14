import { Outlet } from "react-router-dom";
import Topbar from "@components/common/Topbar/Topbar";
import styles from "./PublicLayout.module.css";

const PublicLayout = () => {
  return (
    <div className={styles.container} data-testid="customer-layout">
      <Topbar title={`Ecommerce`} onMenuClick={() => {}} />
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
