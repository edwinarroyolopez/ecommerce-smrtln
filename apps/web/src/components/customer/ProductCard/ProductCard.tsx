import { memo } from "react";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import { useToastStore } from "@/store/useToastStore";
import { MinusIcon, PlusIcon, Button } from "ecommerce-smrtln-ui";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeOneToCart = useCartStore((state) => state.removeOneToCart);
  const quantity = useCartStore(
    (state) => state.cart.find((item) => item.id === product.id)?.quantity || 0
  );

  const showToast = useToastStore((state) => state.showToast);
  const isOutOfStock = product.stock === 0;

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
          {isOutOfStock ? (
            <span className={styles.outOfStock}>Agotado</span>
          ) : quantity > 0 ? (
            <div className={styles.cartControls}>
              <Button
                className={styles.changeButton}
                onClick={() => removeOneToCart(product.id)}
              >
                <MinusIcon />
              </Button>
              <span className={styles.quantity}>{quantity}</span>
              <Button
                className={styles.changeButton}
                onClick={() => addToCart(product.id, showToast)}
              >
                <PlusIcon />
              </Button>
            </div>
          ) : (
            <Button
              className={styles.cartButton}
              onClick={() => addToCart(product.id, showToast)}
            >
              🛒 Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
