import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts';

export function CartTitle() {
  const { cart } = useCartContext();
  return (
    <Link
      to={`/product/${cart.id}`}
      className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
      {cart.title}
    </Link>
  );
}
