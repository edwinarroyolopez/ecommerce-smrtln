import { ReactNode } from "react";
import { useAuthStore } from "@/store/useAuthStore";
// import NavbarIcon from "@/icons/navbar-icon";
import styles from "./Topbar.module.css";

interface TopbarProps {
  children?: ReactNode;
  title?: string;
  onMenuClick: () => void;
}

const Topbar = ({ children, title, onMenuClick }: TopbarProps) => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <div className={styles.topbar}>
      <button className={styles.menuButton} onClick={onMenuClick}>
        <NavbarIcon />
      </button>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.actions}>
        {children}
        <button onClick={logout} className={styles.logoutButton}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Topbar;

const NavbarIcon: React.FC<React.SVGAttributes<{}>> = (props) => (
  <svg width="25.567" height="18" viewBox="0 0 25.567 18" {...props}>
    <g transform="translate(-776 -462)">
      <rect
        width="12.749"
        height="2.499"
        rx="1.25"
        transform="translate(776 462)"
        fill="currentColor"
      />
      <rect
        width="25.567"
        height="2.499"
        rx="1.25"
        transform="translate(776 469.75)"
        fill="currentColor"
      />
      <rect
        width="17.972"
        height="2.499"
        rx="1.25"
        transform="translate(776 477.501)"
        fill="currentColor"
      />
    </g>
  </svg>
);
