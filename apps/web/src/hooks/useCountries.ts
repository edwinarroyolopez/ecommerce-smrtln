// src/hooks/useCountries.ts
import { useQuery } from 'react-query';
import { getCountries } from '@/lib/http-client';

export const useCountries = () => {
  return useQuery('countries', getCountries);
};