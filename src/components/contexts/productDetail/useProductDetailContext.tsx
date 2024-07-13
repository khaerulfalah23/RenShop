import { useContext } from 'react';
import { ProductDetailContext } from './ProductDetailContext';

export function useProductDetailContext() {
  const context = useContext(ProductDetailContext);
  if (!context) {
    throw new Error(
      'useProductDetailContext must be used within a ProductDetailProvider'
    );
  }
  return context;
}
