import { FiTrash2 } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../features/cartSlice';
import { SidebarButton, SidebarLink } from '../../atoms';
import { SidebarTotalPrice } from './SidebarTotalPrice';

export function SidebarActions() {
  const dispatch = useDispatch();
  return (
    <div className='flex flex-col gap-y-3 py-4 mt-4'>
      <div className='flex w-full justify-between items-center'>
        <SidebarTotalPrice />
        <SidebarButton
          onClick={() => dispatch(clearCart())}
          className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </SidebarButton>
      </div>
      <SidebarLink
        link={'/'}
        linkText={'View Cart'}
        className='bg-gray-200 text-primary'
      />
      <SidebarLink
        link={'/'}
        linkText={'Checkout'}
        className='bg-primary text-white'
      />
    </div>
  );
}
