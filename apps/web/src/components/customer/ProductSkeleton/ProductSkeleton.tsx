import styles from "./ProductSkeleton.module.css";

const ProductSkeleton = () => {
  return (
    <div className={styles.skeletonCard} data-testid="loading-skeletons">
      <div className={`${styles.skeletonBlock} ${styles.skeletonImage}`} />
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeletonBlock} ${styles.skeletonText} ${styles.short}`} />
        <div className={`${styles.skeletonBlock} ${styles.skeletonText} ${styles.medium}`} />
        <div className={`${styles.skeletonBlock} ${styles.skeletonButton}`} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
