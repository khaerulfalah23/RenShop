import { BsBag } from 'react-icons/bs';
import { RootState } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../../features/sidebarSlice';

export function HeaderIcon() {
  const dispatch = useDispatch();
  const itemAmount = useSelector(
    (state: RootState) => state.persistedReducer.cartSlice.itemAmount
  );
  return (
    <div
      className='cursor-pointer flex relative'
      onClick={() => dispatch(toggleSidebar())}>
      <BsBag className='text-2xl' />
      <div className='bg-red-500 absolute -right-2 -buttom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center'>
        {itemAmount}
      </div>
    </div>
  );
}
