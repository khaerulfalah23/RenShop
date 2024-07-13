import { IoMdAdd, IoMdRemove } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { decreaseAmount, increaseAmount } from '../../../features/cartSlice';
import { useCartContext } from '../../contexts';

export function CartQuantityControl() {
  const dispatch = useDispatch();
  const { cart } = useCartContext();
  return (
    <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
      {/* minus icon */}
      <div
        onClick={() => dispatch(decreaseAmount(cart.id))}
        className='flex-1 flex items-center h-full justify-center cursor-pointer'>
        <IoMdRemove />
      </div>
      {/* amount */}
      <div className='h-full flex items-center justify-center px-2'>
        {cart.amount}
      </div>
      {/* plus icon */}
      <div
        onClick={() => dispatch(increaseAmount(cart.id))}
        className='flex-1 h-full flex items-center justify-center cursor-pointer'>
        <IoMdAdd />
      </div>
    </div>
  );
}
