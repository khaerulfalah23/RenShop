import { useDispatch } from 'react-redux';
import { useProductDetailContext } from '../../contexts';
import { addToCart } from '../../../features/cartSlice';

export function ProductDetailButton() {
  const dispatch = useDispatch();
  const { productDetail } = useProductDetailContext();
  return (
    <button
      onClick={() => dispatch(addToCart(productDetail))}
      className='bg-primary py-4 px-8 text-white'>
      Add to cart
    </button>
  );
}
