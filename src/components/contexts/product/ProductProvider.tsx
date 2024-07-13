import { PropsWithChildren } from 'react';
import { ProductCard } from '../../organisms';
import { ProductContext } from './ProductContext';
import { ProductDescription } from '../../molecules';

type ProductProviderProps = PropsWithChildren & {
  product: ProductItem;
};

export function ProductProvider({ product, children }: ProductProviderProps) {
  return (
    <ProductContext.Provider value={{ product }}>
      <div>{children}</div>
    </ProductContext.Provider>
  );
}

ProductProvider.Card = ProductCard;
ProductProvider.Description = ProductDescription;
