import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer } from "ecommerce-smrtln-ui";
import { useCartStore } from "@/store/useCartStore";
import { Button, CloseButton } from "ecommerce-smrtln-ui";
import styles from "./FloatCart.module.css";

const FloatCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () =>
      cart
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(0),
    [cart]
  );

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/checkout");
      setIsOpen(false);
    }
  };

  return (
    <div  data-testid="float-cart">
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
                  <span className={styles.priceItem}>
                    ${(item.price * item.quantity).toFixed(0)}
                  </span>
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
          <Button className={styles.checkoutButton} onClick={handleCheckout}>
            Checkout
          </Button>
          <span className={styles.total}>${totalPrice}</span>
        </div>
      </Drawer>
    </div>
  );
};

export default FloatCart;
