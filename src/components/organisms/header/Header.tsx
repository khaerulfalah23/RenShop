import { useEffect, useState } from 'react';
import { HeaderContent } from '../../molecules';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setItemAmount } from '../../../features/cartSlice';

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const cart = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.cartItems
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
    if (cart) {
      dispatch(setItemAmount());
    }
  }, [cart, dispatch]);

  return (
    <header
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}>
      <HeaderContent />
    </header>
  );
}
