import { PropsWithChildren } from 'react';
import { ProductDetailContext } from './ProductDetailContext';
import { ProductDetailImage } from '../../atoms';
import { ProductDetailInformation } from '../../molecules';

type ProductDetailProviderProps = PropsWithChildren & {
  productDetail: ProductItem;
};

export function ProductDetailProvider({
  productDetail,
  children,
}: ProductDetailProviderProps) {
  return (
    <ProductDetailContext.Provider value={{ productDetail }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

ProductDetailProvider.Image = ProductDetailImage;
ProductDetailProvider.Information = ProductDetailInformation;
