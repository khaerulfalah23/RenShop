import { createContext } from 'react';

type ProductDetailContextProps = {
  productDetail: ProductItem;
};

export const ProductDetailContext = createContext<
  ProductDetailContextProps | undefined
>(undefined);
