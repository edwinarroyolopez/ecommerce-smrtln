import { Product } from '@src/types/product';
import axios from 'axios';

// Creamos una instancia de axios para el cliente HTTP
const httpClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener los productos
export const getProducts = async (query: string): Promise<Product[]> => {
  console.log('getProducts')
  const response = await httpClient.get(`/scrap-facebook-marketplace/products?query=${query}`);
  return response.data;
};
