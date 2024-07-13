import { SidebarActions, SidebarHeader } from '../../molecules';
import { useEffect } from 'react';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { setItemAmount, setTotalPrice } from '../../../features/cartSlice';
// import CartItem from '../../../features/cart/CartItem';
import { Cart } from '../cart';

export function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebarSlice.isOpen);
  const cart = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.cartItems
  );
  const itemAmount = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.itemAmount
  );
  useEffect(() => {
    dispatch(setItemAmount());
    dispatch(setTotalPrice());
  }, [cart, dispatch]);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full'
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <SidebarHeader itemAmount={itemAmount} />
      <div className='flex flex-col gap-y-2 overflow-y h-[50%] overflow-x-hidden overflow-y-auto border-b'>
        <Cart />
        {/* {cart.map((item) => (
          <CartItem
            item={item}
            key={item.id}
          />
        ))} */}
      </div>
      <SidebarActions />
    </div>
  );
}
