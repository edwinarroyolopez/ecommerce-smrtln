import styles from "./ProductCard.module.css"
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.category}>{product.category}</p>
        <div className={styles.priceContainer}>
          <span className={styles.price}>${product.price}</span>
        </div>
        <button className={styles.cartButton}>🛒 Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
