import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Route } from "@src/types/routes";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  children?: ReactNode;
  title?: string;
  routes: Route[];
}

const Sidebar = ({ children, title, routes }: SidebarProps) => {
  return (
    <div className={styles.sidebar}>
      <h2>{title}</h2>
      {children}
      <nav>
        <ul className={styles.navList}>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path} className={styles.navItem}>
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
