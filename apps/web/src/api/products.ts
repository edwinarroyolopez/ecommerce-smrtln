import { Product } from '@src/types/product';
import axios from 'axios';

// Creamos una instancia de axios para el cliente HTTP
const httpClient = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'scrpng-app-production.up.railway.app',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener los productos
export const getProducts = async (): Promise<Product[]> => {
  console.log('getProducts');
  const response = await httpClient.get(`/scrap-facebook-marketplace/products`);
  return response.data;
};