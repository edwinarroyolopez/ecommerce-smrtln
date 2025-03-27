export type Product = {
  id: number;
  link: string;
  image: string;
  thumbnail: string;
  name: string;
  price: string;
  category: string;
  location: string;
  stock: number;
  details: ProductDetails;
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
  price: string;
  category: string;
  location: string;
  stock: number;
  details: ProductDetails;
}

type MarketplaceItemsArray = MarketplaceItem[];