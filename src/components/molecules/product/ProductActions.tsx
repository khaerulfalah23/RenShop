import { useDispatch } from 'react-redux';
import { ProductButton, ProductLink } from '../../atoms';
import { useProductContext } from '../../contexts';
import { addToCart } from '../../../features/cartSlice';

export function ProductActions() {
  const { product } = useProductContext();
  const dispatch = useDispatch();
  return (
    <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
      <ProductButton onClick={() => dispatch(addToCart(product))} />
      <ProductLink />
    </div>
  );
}
