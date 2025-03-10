import { Button, Backdrop } from "@ecommerce-smrtln/ui/index";
import styles from "./InvoiceModal.module.css";
import { Invoice } from "@src/types/invoice";

interface InvoiceModalProps {
  invoice: Invoice | null;
  isOpen: boolean;
  onClose: () => void;
}

const InvoiceModal: React.FC<InvoiceModalProps> = ({ invoice, isOpen, onClose }) => {
  if (!invoice) return null;

  return (
    <Backdrop visible={isOpen} onClick={onClose}>
      <div className={styles.invoiceModal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h2>Detalle de la Factura</h2>
        </header>

        <section className={styles.invoiceDetails}>
          <dl>
            <div className={styles.detailRow}>
              <dt>ID:</dt>
              <dd>{invoice.id}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Fecha:</dt>
              <dd>{invoice.date.split("T")[0]}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Cliente:</dt>
              <dd>{invoice.customer.name}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Email:</dt>
              <dd className={styles.email}>{invoice.customer.email}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Dirección:</dt>
              <dd>{invoice.customer.shippingAddress}</dd>
            </div>
            <div className={styles.detailRow}>
              <dt>Entrega:</dt>
              <dd>{invoice.customer.deliveryTime}</dd>
            </div>
          </dl>
        </section>

        <section className={styles.invoiceProducts}>
          <h3>Productos</h3>
          <ul>
            {invoice.items.map((item) => (
              <li key={item.id} className={styles.invoiceItem}>
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className={styles.invoiceThumbnail}
                />
                <div className={styles.invoiceItemDetails}>
                  <span>{item.name} <b>x {item.quantity}</b></span>
                  <span className={styles.invoicePrice}>
                    ${(item.price * item.quantity).toFixed(0)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className={styles.footer}>
          <div className={styles.invoiceTotal}>
            <strong>Total:</strong> $ {invoice.total.toFixed(0)}
          </div>
          <Button className={styles.closeButton} onClick={onClose}>Cerrar</Button>
        </footer>
      </div>
    </Backdrop>
  );
};

export default InvoiceModal;
