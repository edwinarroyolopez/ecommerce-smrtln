import { memo, useState } from "react";
import styles from "./ProductCard.module.css";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import { useToastStore } from "@/store/useToastStore";
import { MinusIcon, PlusIcon, Button } from "ecommerce-smrtln-ui";
import ProductModal from "@components/customer/ProductModal/ProductModal";

type ProductCardProps = {
  product: Product;
};

// Función para formatear el precio en COP
const formatPrice = (price: string | number): string => {
  // Convertir a número si es string (eliminar caracteres no numéricos primero)
  const numericPrice = typeof price === 'string' 
    ? Number(price.replace(/[^\d]/g, '')) 
    : Number(price);
  
  // Formatear como COP (sin decimales, con separadores de miles)
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(numericPrice);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeOneToCart = useCartStore((state) => state.removeOneToCart);
  const quantity = useCartStore((state) => 
    state.cart.find((item) => item.id === product.id)?.quantity || 0
  );

  const showToast = useToastStore((state) => state.showToast);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Precio formateado
  const formattedPrice = formatPrice(product.price);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>
          <p className={styles.category}>{product.category}</p>
          <div className={styles.bottomContainer}>
            <span className={styles.price}>{formattedPrice}</span>
            {quantity > 0 ? (
              <div 
                className={styles.cartControls} 
                onClick={(e) => e.stopPropagation()}
              >
                <Button className={styles.changeButton} onClick={() => removeOneToCart(product.id)}>
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
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product.id, showToast);
                }}
              >
                🛒 Cart
              </Button>
            )}
          </div>
        </div>
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={product} 
      />
    </>
  );
};

export default memo(ProductCard);