import { Outlet } from "react-router-dom";
import { useState } from "react";
import Topbar from "@components/common/Topbar/Topbar";
import styles from "./AdminLayout.module.css";
import { useAuthStore } from "@/store/useAuthStore";


const AdminLayout = () => {
  const user = useAuthStore((state) => state.user);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Topbar title={`Dashboard: ${user?.username}`} onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />
      <div className={styles.content}>
        <div className={styles.mainContent}  data-testid="test-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
