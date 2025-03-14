import {
  useEffect,
  useState,
  useCallback,
  useDeferredValue,
  useMemo,
} from "react";
import {
  getLocalStorageItem,
  setLocalStorageItem,
} from "@/utils/localStorageUtil";
import { Product } from "@/types/product";
import ProductCard from "@/components/customer/ProductCard/ProductCard";
import ProductSkeleton from "@/components/customer/ProductSkeleton/ProductSkeleton";
import FloatCart from "@components/customer/FloatCart/FloatCart";
import SearchBar from "@/components/customer/SearchBar/SearchBar";
import styles from "./products.module.css";
import SEO from "@/components/common/SEO/SEO";
import { mockData } from "@/data/products";

const Products = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    setTimeout(() => {
      const storedProducts = getLocalStorageItem<Product[]>("products", []);

      if (storedProducts.length === 0 || !storedProducts) {
        setLocalStorageItem("products", mockData);
        setProducts(storedProducts);
      }

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
    <>
      <SEO
        title="Fresh Fruits - Explore Our Premium Selection | Ecommerce Smrtln"
        description="Discover a wide variety of fresh, high-quality fruits delivered straight to your doorstep. From tropical mangoes to juicy apples, find your favorites and enjoy the best nature has to offer."
        keywords={[
          "fresh fruits",
          "premium fruits",
          "online fruit store",
          "buy fruits online",
          "healthy fruits",
        ]}
        author="Edwin Arroyo"
        image="https://res.cloudinary.com/db3x4vzj0/image/upload/v1741957612/fruits_h1w8ev.jpg"
        url="https://d3a3r6okv6cu1x.cloudfront.net/products"
      />

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
    </>
  );
};

export default Products;
