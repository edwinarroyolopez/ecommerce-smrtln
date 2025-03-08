import { useEffect, useState } from "react";
import { getLocalStorageItem } from "@/utils/localStorageUtil";
import { Product } from "@/types/product";
import ProductCard from "@/components/customer/ProductCard/ProductCard";
import ProductSkeleton from "@/components/customer/ProductSkeleton/ProductSkeleton";
import FloatCart from "@components/customer/FloatCart/FloatCart";
import styles from "./products.module.css";

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      const storedProducts = getLocalStorageItem<Product[]>("products", []);
      setProducts(storedProducts);
    }, 2000); // Simula carga de 2 segundos
  }, []);

  return (
    <div className={styles.container}>
      <FloatCart />
      <header className={styles.header}>
        <h1>Productos</h1>
      </header>
      <div className={styles.productsGrid}>
        {products === null
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          : products.length > 0
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : <p>No hay productos disponibles</p>}
      </div>
    </div>
  );
};

export default Products;
