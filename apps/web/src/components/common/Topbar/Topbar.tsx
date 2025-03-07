import { ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import styles from "./Topbar.module.css";

interface TopbarProps {
  children?: ReactNode;
}

const Topbar = ({ children }: TopbarProps) => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className={styles.topbar}>
      {children}
      <button onClick={logout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Topbar;
