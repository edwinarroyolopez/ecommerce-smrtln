import { Button } from "@ecommerce-smrtln/ui/index";
import { useAuthStore } from "@/store/useAuthStore";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import styles from "./invoices.module.css";

const Invoices = () => {
  const { user } = useAuthStore();
  const { invoices } = useInvoiceStore();

  const userInvoices = invoices.filter(
    (invoice) => invoice.username === user?.username
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📜 Tus Facturas</h1>

      {userInvoices.length > 0 ? (
        <div className={styles.invoiceList}>
          {userInvoices.map((invoice) => (
            <div key={invoice.id} className={styles.invoiceCard}>
              <div className={styles.invoiceHeader}>
                <span className={styles.invoiceId}>{invoice.id}</span>
                <span className={styles.invoiceDate}>
                  {invoice.date.split("T")[0]}
                </span>
              </div>

              <div className={styles.invoiceDetails}>
                <span className={styles.value}>{invoice.username}</span>
                <span className={styles.label}>Total:</span>{" "}
                <span className={styles.value}>
                  ${" "}{invoice.total.toFixed(0)}
                </span>
              </div>

              <Button className={styles.viewButton}>Ver Factura</Button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noInvoices}>❌ No tienes facturas registradas.</p>
      )}
    </div>
  );
};

export default Invoices;
