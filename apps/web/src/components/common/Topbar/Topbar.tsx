import { ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import styles from "./Topbar.module.css";
import { title } from "process";

interface TopbarProps {
  children?: ReactNode;
  title?: string;
}

const Topbar = ({ children }: TopbarProps) => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className={styles.topbar}>
      <h2>{title}</h2>
      {children}
      <button onClick={logout} className={styles.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default Topbar;
