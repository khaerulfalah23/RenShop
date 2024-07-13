import { createContext } from 'react';

type CartContextProps = {
  cart: ProductItem;
};

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);
