import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/utils/localStorageUtil";
import { Product } from "@/types/product";
import ProductCard from "@/components/customer/ProductCard/ProductCard";
import ProductCart from "@components/customer/ProductCart/ProductCart";
import styles from "./products.module.css";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = getLocalStorageItem<Product[]>("products", []);
    setProducts(storedProducts);
  }, []);

  

  return (
    <div className={styles.container}>
      <ProductCart />
      <header className={styles.header}>
        <h1>Productos</h1>
      </header>
      <div className={styles.productsGrid}>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles</p>
        )}
      </div>
    </div>
  );
};

export default Products;
