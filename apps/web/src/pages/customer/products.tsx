import {
  useEffect,
  useState,
  useCallback,
  useDeferredValue,
  useMemo,
} from "react";
import { getLocalStorageItem } from "@/utils/localStorageUtil";
import { Product } from "@/types/product";
import ProductCard from "@/components/customer/ProductCard/ProductCard";
import ProductSkeleton from "@/components/customer/ProductSkeleton/ProductSkeleton";
import FloatCart from "@components/customer/FloatCart/FloatCart";
import SearchBar from "@/components/customer/SearchBar/SearchBar";
import styles from "./products.module.css";

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    setTimeout(() => {
      const storedProducts = getLocalStorageItem<Product[]>("products", []);
      setProducts(storedProducts);
    }, 2000); // Simula carga de 2 segundos
  }, []);

  const filteredProducts = useMemo(() => {
    if (!products) return null;
    return products.filter((product) =>
      product.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  }, [products, deferredSearchTerm]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <div className={styles.container}>
      <FloatCart />
      <header className={styles.header}>
        <h1>Productos</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <div className={styles.productsGrid}>
        {filteredProducts === null ? (
          Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
