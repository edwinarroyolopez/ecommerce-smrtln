import styles from "./FloatCart.module.css";

const ProductCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cart}>
        🛒 <span className={styles.count}>3</span>
      </div>
    </div>
  );
};

export default ProductCart;
