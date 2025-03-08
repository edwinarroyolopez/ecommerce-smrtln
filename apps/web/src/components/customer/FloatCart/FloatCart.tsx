import { useState } from "react";
import { Drawer } from "@ecommerce-smrtln/ui/index";
import { useCartStore } from "@/store/useCartStore";
import styles from "./FloatCart.module.css";

const FloatCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(0);

  return (
    <>
      <div className={styles.container} onClick={() => setIsOpen(true)}>
        <div className={styles.cart}>
          <span className={styles.icon}>🛍️</span>
          <span className={styles.text}>
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </span>
        </div>
        <div className={styles.price}>${totalPrice}</div>
      </div>

      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} title="Carrito">
        <div className={styles.items}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className={styles.empty}>Tu carrito está vacío 🛒</p>
          )}
        </div>
        <div className={styles.footer}>
          <button className={styles.checkoutButton}>Checkout</button>
          <span className={styles.total}>${totalPrice}</span>
        </div>
      </Drawer>
    </>
  );
};

export default FloatCart;
