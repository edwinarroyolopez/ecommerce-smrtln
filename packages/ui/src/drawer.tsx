
import styles from "./styles/drawer.module.css";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <div className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}
          <button className={styles.closeButton} onClick={onClose}>✖</button>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      {isOpen && <div className={styles.overlay} onClick={onClose}></div>}
    </>
  );
};

export default Drawer;
