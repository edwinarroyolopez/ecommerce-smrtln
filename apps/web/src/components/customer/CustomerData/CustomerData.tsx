import { LABELS_CUSTOMER_DATA } from "@/utils/constants";
import styles from "./CustomerData.module.css";

interface CustomerDataProps {
  formValues: Record<string, string>;
}

const CustomerData: React.FC<CustomerDataProps> = ({ formValues }) => (
  <div className={styles.customerDataContainer}>
    <h2 className={styles.customerDataTitle}>📋 Datos del Cliente</h2>
    <dl className={styles.customerData}>
      {Object.entries(formValues).map(([key, value]) =>
        key !== "orderNote" ? (
          <div key={key} className={styles.dataRow}>
            <dt className={styles.label}>{LABELS_CUSTOMER_DATA[key] || key}: </dt>
            <dd className={styles.value}>{value}</dd>
          </div>
        ) : null
      )}
    </dl>
  </div>
);

export default CustomerData;
