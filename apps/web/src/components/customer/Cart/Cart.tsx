import { useState } from "react";
import { Drawer } from "@ecommerce-smrtln/ui/index";
import styles from "./Cart.module.css";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={styles.cartButton} onClick={() => setIsOpen(true)}>
        🛒 Cart (3)
      </button>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Cart Items">
        <div className={styles.items}>
          <div className={styles.item}>
            <span>🍇 Blueberries</span>
            <span>$3.00</span>
          </div>
          {/* Más productos aquí */}
        </div>
        <div className={styles.footer}>
          <button className={styles.checkoutButton}>Checkout</button>
          <span className={styles.total}>$3.00</span>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
