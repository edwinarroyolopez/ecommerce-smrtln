import styles from "./CheckoutSkeleton.module.css";

const CheckoutSkeleton = () => {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonTitle}></div>
      
      <div className={styles.skeletonTopCheckout}>
        <div className={styles.skeletonCartSummary}></div>
        <div className={styles.skeletonCustomerData}></div>
      </div>

      <div className={styles.skeletonBottomCheckout}>
        <div className={styles.skeletonButton}></div>
        <div className={styles.skeletonSection}></div>
        <div className={styles.skeletonButton}></div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;
