import { memo } from "react";
import styles from "./ProductCard.module.css"
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import { useToastStore } from "@/store/useToastStore";
import { MinusIcon, PlusIcon } from "@ecommerce-smrtln/ui/index";
import { ToastType } from "@src/types/toast";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeOneToCart = useCartStore((state) => state.removeOneToCart);
  const quantity = useCartStore((state) => 
    state.cart.find((item) => item.id === product.id)?.quantity || 0
  );

  const showToast = useToastStore((state) => state.showToast);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.bottomContainer}>
          <span className={styles.price}>${product.price}</span>
          {quantity > 0 ? (
            <div className={styles.cartControls}>
              <button className={styles.changeButton} onClick={() => removeOneToCart(product.id)}>
                <MinusIcon />
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.changeButton}
                onClick={() => addToCart(product.id, showToast)}
              >
                <PlusIcon />
              </button>
            </div>
          ) : (
            <button className={styles.cartButton} onClick={() => addToCart(product.id, showToast)}>
              🛒 Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
