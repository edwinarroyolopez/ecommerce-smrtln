// types/facebookProduct.ts
export interface FacebookProduct {
    id: number; // Ahora es obligatorio
    link: string;
    image: string;
    name: string;
    price: string;
    location: string;
    details: {
      images: string[];
      description: string;
      sellerName: string;
      sellerProfile: string;
      joinedDate: string;
      activePosts: string;
    };
  }