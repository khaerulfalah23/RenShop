import { PropsWithChildren } from 'react';
import { CartContext } from './CartContext';
import { CartImage } from '../../atoms';
import { CartAction } from '../../organisms';

type CartProviderProps = PropsWithChildren & {
  cart: ProductItem;
};

export function CartProvider({ cart, children }: CartProviderProps) {
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}

CartProvider.Image = CartImage;
CartProvider.Action = CartAction;
