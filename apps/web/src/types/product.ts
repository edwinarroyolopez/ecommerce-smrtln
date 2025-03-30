export type Product = {
  id: number;
  link: string;
  image: string;
  thumbnail: string;
  name?: string;
  title?: string;
  price: number;
  category: string;
  location: string;
  stock: number;
  images: string[];
  description: string;
  sellerName: string;
  sellerProfile: string;
  joinedDate: string;
  activePosts?: string;
};


export interface ProductDetails {
  images: string[];
  description: string;
  sellerName: string;
  sellerProfile: string;
  joinedDate: string;
  activePosts?: string;
}

export interface MarketplaceItem {
  id: number;
  link: string;
  image: string;
  thumbnail: string;
  name: string;
  price: number;
  category: string;
  location: string;
  stock: number;
  details: ProductDetails;
}
