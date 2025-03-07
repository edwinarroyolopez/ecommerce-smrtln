import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Admin Panel</h2>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link to="/admin/dashboard" className={styles.navItem}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className={styles.navItem}>
              Usuarios
            </Link>
          </li>
          <li>
            <Link to="/admin/settings" className={styles.navItem}>
              Configuración
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
