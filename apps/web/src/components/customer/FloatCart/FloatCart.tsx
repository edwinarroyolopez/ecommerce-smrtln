import { useState } from "react";
import { Drawer } from "@ecommerce-smrtln/ui/index";
import styles from "./FloatCart.module.css";

const FloatCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante del carrito */}
      <div className={styles.container} onClick={() => setIsOpen(true)}>
        <div className={styles.cart}>
          🛒 <span className={styles.count}>3</span>
        </div>
      </div>

      {/* Drawer del carrito */}
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Carrito">
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

export default FloatCart;
