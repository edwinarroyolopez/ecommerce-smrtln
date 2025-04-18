// src/components/ProductModal.tsx
import { Button, Backdrop } from "ecommerce-smrtln-ui";
import styles from "./ProductModal.module.css";
import { Product } from "@src/types/product";
import { useState } from "react";


interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

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


const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % product.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const formattedPrice = formatPrice(product.price);
  return (
    <div style={{ display: isOpen ? "flex" : "none" }}>
      <Backdrop visible={isOpen} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.productHeader}>
            <h2>{product.title}</h2>
            <div className={styles.priceLocation}>
              <span className={styles.price}>{formattedPrice}</span>
              <span className={styles.location}>{product.location}</span>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.mainImageContainer}>
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.title}
                className={styles.mainImage}
              />
              {product.images.length > 1 && (
                <>
                  <button 
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={prevImage}
                  >
                    &lt;
                  </button>
                  <button 
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={nextImage}
                  >
                    &gt;
                  </button>
                </>
              )}
            </div>
            <div className={styles.thumbnailContainer}>
              {product.images.slice(0, 5).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`${styles.thumbnail} ${currentImageIndex === index ? styles.activeThumbnail : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
              {product.images.length > 5 && (
                <div className={styles.moreThumbnails}>
                  +{product.images.length - 5}
                </div>
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h3>Descripción</h3>
            <p className={styles.description}>{product.description}</p>
          </div>

          <div className={styles.section}>
            <h3>Información del vendedor</h3>
            <div className={styles.sellerInfo}>
              <img 
                src={product.image} 
                alt={product.seller}
                className={styles.sellerImage}
              />
              <div>
                <a 
                  href={product.sellerProfile} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.sellerName}
                >
                  {product.seller}
                </a>
                <p>Miembro desde {product.joinedDate}</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <Button 
              className={styles.contactButton}
              onClick={() => window.open(product.link, '_blank')}
            >
              Contactar al vendedor
            </Button>
            <Button 
              className={styles.closeButton}
              onClick={onClose}
            >
              Cerrar
            </Button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default ProductModal;