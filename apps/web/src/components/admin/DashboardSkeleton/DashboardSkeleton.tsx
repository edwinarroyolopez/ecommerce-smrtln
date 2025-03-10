import styles from "./DashboardSkeleton.module.css";
import { Skeleton } from "ecommerce-smrtln-ui/index"; 

const DashboardSkeleton = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.summaryCard}>
          <div className={styles.header}>
            <Skeleton width="120px" height="24px" />
          </div>
          <div className={styles.contentGrid}>
            {[...Array(4)].map((_, index) => (
              <Skeleton key={index} width="180px" height="100px" borderRadius="12px" />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.summaryCard}>
          <div className={styles.header}>
            <Skeleton width="120px" height="24px" />
          </div>
          <Skeleton width="100%" height="250px" borderRadius="12px" />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.summaryCard}>
          <div className={styles.header}>
            <Skeleton width="180px" height="24px" />
          </div>
          <Skeleton width="100%" height="200px" borderRadius="12px" />
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;
