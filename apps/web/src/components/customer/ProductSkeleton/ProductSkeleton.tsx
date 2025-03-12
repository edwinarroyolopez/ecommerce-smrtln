import styles from "./ProductSkeleton.module.css";

const ProductSkeleton = () => {
  return (
    <div className={styles.skeletonCard} data-testid="skeleton-card">
      <div className={`${styles.skeletonBlock} ${styles.skeletonImage}`} data-testid="skeleton-image" />
      <div className={styles.skeletonContent}>
        <div className={`${styles.skeletonBlock} ${styles.skeletonText} ${styles.short}`} data-testid="skeleton-text-short" />
        <div className={`${styles.skeletonBlock} ${styles.skeletonText} ${styles.medium}`} data-testid="skeleton-text-medium" />
        <div className={`${styles.skeletonBlock} ${styles.skeletonButton}`} data-testid="skeleton-button" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
