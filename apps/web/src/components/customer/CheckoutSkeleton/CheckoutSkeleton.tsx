import styles from "./CheckoutSkeleton.module.css";

const CheckoutSkeleton = () => {
  return (
    <div className={styles.skeletonContainer} data-testid="skeleton-container">
      <div className={styles.skeletonTitle} data-testid="skeleton-title"></div>
      
      <div className={styles.skeletonTopCheckout} data-testid="skeleton-top-checkout">
        <div className={styles.skeletonCartSummary} data-testid="skeleton-cart-summary"></div>
        <div className={styles.skeletonCustomerData} data-testid="skeleton-customer-data"></div>
      </div>

      <div className={styles.skeletonBottomCheckout} data-testid="skeleton-bottom-checkout">
        <div className={styles.skeletonButton} data-testid="skeleton-button"></div>
        <div className={styles.skeletonSection} data-testid="skeleton-section"></div>
        <div className={styles.skeletonButton} data-testid="skeleton-button"></div>
      </div>
    </div>
  );
};

export default CheckoutSkeleton;
