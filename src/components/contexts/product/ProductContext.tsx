import { createContext } from 'react';

type ProductContextProps = {
  product: ProductItem;
};

export const ProductContext = createContext<ProductContextProps | undefined>(
  undefined
);
