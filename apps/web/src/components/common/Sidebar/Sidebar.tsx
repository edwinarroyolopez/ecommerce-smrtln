import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Route } from "@src/types/routes";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  children?: ReactNode;
  title?: string;
  routes: Route[];
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ children, title, routes, isOpen, onClose }: SidebarProps) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <button className={styles.closeButton} onClick={onClose}>
        ✖
      </button>
      <h2 className={styles.title}>{title}</h2>
      {children}
      <nav>
        <ul className={styles.navList}>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className={styles.navItem} onClick={onClose}>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
