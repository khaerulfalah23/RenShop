import { useSelector } from 'react-redux';
import { SidebarText } from '../../atoms';
import { RootState } from '../../../redux/store';

export function SidebarTotalPrice() {
  const totalPrice = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.totalPrice
  );
  return (
    <SidebarText className='uppercase font-semibold'>
      <span className='mr-2'>Total:</span>$ {totalPrice.toFixed(2)}
    </SidebarText>
  );
}
