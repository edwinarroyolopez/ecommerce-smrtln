import styles from "./InvoicesSkeleton.module.css";

const InvoicesSkeleton = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📜 Tus Facturas</h1>

      <div className={styles.invoiceList}>
        {[...Array(3)].map((_, index) => (
          <div key={index} className={styles.invoiceCard}>
            <div className={styles.invoiceHeader}>
              <span className={`${styles.skeleton} ${styles.invoiceId}`} />
              <span className={`${styles.skeleton} ${styles.invoiceDate}`} />
            </div>

            <div className={styles.invoiceDetails}>
              <span className={`${styles.skeleton} ${styles.value}`} />
              <span className={styles.label}>Total:</span>
              <span className={`${styles.skeleton} ${styles.value}`} />
            </div>

            <div className={`${styles.skeleton} ${styles.viewButton}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvoicesSkeleton;
