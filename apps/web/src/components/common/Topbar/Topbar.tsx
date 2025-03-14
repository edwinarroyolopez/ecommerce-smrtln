import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import styles from "./Topbar.module.css";
import { NavbarIcon } from "ecommerce-smrtln-ui";

interface TopbarProps {
  children?: ReactNode;
  title?: string;
  onMenuClick: () => void;
}

const Topbar = ({ children, title, onMenuClick }: TopbarProps) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className={styles.topbar}>
      <button className={styles.menuButton} onClick={onMenuClick}>
        <NavbarIcon />
      </button>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.actions}>
        {children}
        {isAuthenticated ? (
          <button onClick={logout} className={styles.logoutButton}>
            Cerrar sesión
          </button>
        ) : (
          <button onClick={() => navigate("/login")} className={styles.logoutButton}>
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  );
};

export default Topbar;
