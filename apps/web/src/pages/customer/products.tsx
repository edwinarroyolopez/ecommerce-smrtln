import {
  useState,
  useCallback,
  useMemo,
} from "react";
import { useProducts } from "@/hooks/useProducts";

import ProductCard from "@/components/customer/ProductCard/ProductCard";
import ProductSkeleton from "@/components/customer/ProductSkeleton/ProductSkeleton";
import FloatCart from "@components/customer/FloatCart/FloatCart";
import SearchBar from "@/components/customer/SearchBar/SearchBar";
import styles from "./products.module.css";
import SEO from "@/components/common/SEO/SEO";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Traemos todos los productos desde la API (solo una vez)
  const { 
    data: marketplaceProducts, 
    isLoading, 
    error 
  } = useProducts(); // No pasamos ningún argumento

  // Transformamos los productos de Marketplace al formato de Product que espera la aplicación
  const products = useMemo(() => {
    if (!marketplaceProducts) return null;

    return marketplaceProducts.map((item, index) => ({
      id: index.toString(),
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      stock: item.stock,
      images: item.images,
      sellerName: item.sellerName,
      sellerProfile: item.sellerProfile,
      joinedDate: item.joinedDate,
    }));
  }, [marketplaceProducts]);

  // Filtramos los productos según el término de búsqueda
  const filteredProducts = useMemo(() => {
    if (!products) return null;

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter((product:any) =>
      product.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [products, searchTerm]);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return (
    <>
      <SEO
        title="Facebook Marketplace Products | Ecommerce Smrtln"
        description="Discover a wide variety of products from Facebook Marketplace. Find great deals on vehicles, electronics, and more."
        keywords={[
          "facebook marketplace",
          "used cars",
          "optra",
          "marketplace products",
        ]}
        author="Edwin Arroyo"
        image="https://res.cloudinary.com/db3x4vzj0/image/upload/v1741957612/fruits_h1w8ev.jpg"
        url="https://d3a3r6okv6cu1x.cloudfront.net/products"
      />

      <div className={styles.container}>
        <FloatCart />
        <header className={styles.header}>
          <h1>Productos de Facebook Marketplace</h1>
          <SearchBar onSearch={handleSearch} />
        </header>
        <div className={styles.productsGrid}>
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))
          ) : error ? (
            <p>Error al cargar productos: {(error as Error).message}</p>
          ) : filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts.map((product:any) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No hay productos disponibles para esta búsqueda</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;