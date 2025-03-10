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
        <h2 className={styles.invoiceTitle}>Detalle de la Factura</h2>
        <p className={styles.invoiceDetail}><strong>ID:</strong> {invoice.id}</p>
        <p className={styles.invoiceDetail}><strong>Fecha:</strong> {invoice.date.split("T")[0]}</p>
        <p className={styles.invoiceDetail}><strong>Cliente:</strong> {invoice.customer.name}</p>
        <p className={styles.invoiceDetail}><strong>Email:</strong> {invoice.customer.email}</p>
        <p className={styles.invoiceDetail}><strong>Dirección:</strong> {invoice.customer.shippingAddress}</p>
        <p className={styles.invoiceDetail}><strong>Horario de Entrega:</strong> {invoice.customer.deliveryTime}</p>

        <div className={styles.invoiceProducts}>
          <h3>Productos</h3>
          {invoice.items.map((item) => (
            <div key={item.id} className={styles.invoiceItem}>
              <img
                src={item.thumbnail}
                alt={item.name}
                className={styles.invoiceThumbnail}
              />
              <div className={styles.invoiceItemDetails}>
                <span>
                  {item.name} x <b>{item.quantity}</b>
                </span>
                <span className={styles.invoicePrice}>
                  ${(item.price * item.quantity).toFixed(0)}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.invoiceTotal}>Total: $ {invoice.total.toFixed(0)}</p>

        <Button className={styles.closeButton} onClick={onClose}>Cerrar</Button>
      </div>
    </Backdrop>
  );
};

export default InvoiceModal;
