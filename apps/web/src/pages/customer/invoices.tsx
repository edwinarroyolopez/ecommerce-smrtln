import { Button } from "ecommerce-smrtln-ui";
import { useAuthStore } from "@/store/useAuthStore";
import { useInvoiceStore } from "@/store/useInvoiceStore";
import { useState, useEffect } from "react";
import InvoiceModal from "@components/common/InvoiceModal/InvoiceModal";
import styles from "./invoices.module.css";

import { Invoice } from "@src/types/invoice";
import InvoicesSkeleton from "@components/customer/InvoicesSkeleton/InvoicesSkeleton";

const Invoices = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthStore();
  const { invoices } = useInvoiceStore();

  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (invoices.length > 0) {
        setIsLoading(false);
      }
    }, 2000); // Simula carga de 2 segundos
  }, [invoices]);

  if (isLoading) {
    return <InvoicesSkeleton />;
  }

  const userInvoices = invoices.filter(
    (invoice) => invoice.username === user?.username
  );

  const openModal = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setModalOpen(true);
  };

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
                  $ {invoice.total.toFixed(0)}
                </span>
              </div>

              <Button
                className={styles.viewButton}
                onClick={() => openModal(invoice)}
              >
                Ver Factura
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noInvoices}>❌ No tienes facturas registradas.</p>
      )}

      <InvoiceModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        invoice={selectedInvoice}
      />
    </div>
  );
};

export default Invoices;
