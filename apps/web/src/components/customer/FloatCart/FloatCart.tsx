import { useState } from "react";
import { Drawer } from "@ecommerce-smrtln/ui/index";
import { useCartStore } from "@/store/useCartStore";
import { Button,CloseButton } from "@ecommerce-smrtln/ui/index";
import styles from "./FloatCart.module.css";

const FloatCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

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
                <img
                  src={item.thumbnail || item.image}
                  alt={item.name}
                  className={styles.thumbnail}
                />
                <div className={styles.itemDetails}>
                  <span>
                    {item.name} x <b>{item.quantity}</b>
                  </span>
                  <span className={styles.priceItem}>${(item.price * item.quantity).toFixed(0)}</span>
                </div>
                <CloseButton
                  className={styles.removeButton}
                  onClick={() => removeFromCart(item.id)}
                >
                  ✖
                </CloseButton>
              </div>
            ))
          ) : (
            <p className={styles.empty}>Tu carrito está vacío 🛒</p>
          )}
        </div>
        <div className={styles.footer}>
          <Button className={styles.checkoutButton}>Checkout</Button>
          <span className={styles.total}>${totalPrice}</span>
        </div>
      </Drawer>
    </>
  );
};

export default FloatCart;
