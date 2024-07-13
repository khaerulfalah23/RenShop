import { useSelector } from 'react-redux';
import { CartSection } from './CartSection';
import { RootState } from '../../../redux/store';
import { CartProvider } from '../../contexts';

export function Cart() {
  const cart = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.cartItems
  );
  return (
    <>
      {cart.map((item) => (
        <CartSection key={item.id}>
          <CartProvider cart={item}>
            <CartProvider.Image />
            <CartProvider.Action />
          </CartProvider>
        </CartSection>
      ))}
    </>
  );
}
