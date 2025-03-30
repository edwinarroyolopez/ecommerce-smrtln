import { FC } from "react";
import styles from "./BottomBar.module.css";

interface BottomBarProps {
  icons: {
    icon: React.ReactNode;
    onClick: () => void;
    label?: string;
  }[];
}

const BottomBar: FC<BottomBarProps> = ({ icons }) => {
  return (
    <div className={styles.bottomBar}>
      {icons.map((item, index) => (
        <div key={index} className={styles.iconContainer} onClick={item.onClick}>
          <div className={styles.icon}>{item.icon}</div>
          {item.label && <span className={styles.label}>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default BottomBar;
