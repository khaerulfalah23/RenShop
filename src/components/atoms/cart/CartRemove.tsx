import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../features/cartSlice';
import { useCartContext } from '../../contexts';
import { IoMdClose } from 'react-icons/io';

export function CartRemove() {
  const dispatch = useDispatch();
  const { cart } = useCartContext();
  return (
    <div
      onClick={() => dispatch(removeFromCart(cart.id))}
      className='text-xl cursor-pointer'>
      <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
    </div>
  );
}
