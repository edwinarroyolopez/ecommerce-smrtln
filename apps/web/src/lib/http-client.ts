import { URL_COUNTRIES } from '@/utils/constants';
import axios from 'axios';

const httpClient = axios.create({
  baseURL: URL_COUNTRIES,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCountries = async () => {
  const response = await httpClient.get('/region/america');
  return response.data;
};