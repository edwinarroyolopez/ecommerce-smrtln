import { useAuthStore } from "@/store/useAuthStore";
import styles from "./Topbar.module.css";

const Topbar = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className={styles.topbar}>
      <h1>Admin Dashboard</h1>
      <button onClick={logout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Topbar;
