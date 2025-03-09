import styles from "./CartSummary.module.css";
import { CartItem } from "@src/types/cart";

interface CartSummaryProps {
  cart: CartItem[];
  totalAmount: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cart, totalAmount }) => {
  if (cart.length === 0)
    return <p className={styles.empty}>Tu carrito está vacío 🛒</p>;

  return (
    <div className={styles.cartSummary}>
      <h2>🛍️ Resumen del Pedido</h2>
      {cart.map((item) => (
        <div key={item.id} className={styles.item}>
          <img
            src={item.thumbnail}
            alt={item.name}
            className={styles.thumbnail}
          />
          <div className={styles.itemDetails}>
            <span>
              {item.name} x <b>{item.quantity}</b> 
            </span>
            <span className={styles.priceItem}>
            ${(item.price * item.quantity).toFixed(0)}
            </span>
          </div>
        </div>
      ))}
      <div className={styles.total}>
        <b>Total: ${totalAmount.toFixed(0)}</b>
      </div>
    </div>
  );
};

export default CartSummary;
