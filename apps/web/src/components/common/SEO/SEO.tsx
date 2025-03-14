import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string; 
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title="Ecommerce Smrtln",
  description = "Ecommerce desarrollado por Edwin Arroyo",
  keywords = [],
  author = "Edwin Arroyo",
  image = "https://res.cloudinary.com/db3x4vzj0/image/upload/v1741957032/Profile_Image_znh4n7.jpg",
  url = "https://d3a3r6okv6cu1x.cloudfront.net/products",
}) => {
  return (
    <Helmet>
      {/* Título de la página */}
      <title>{title}</title>

      {/* Meta Descriptions */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;