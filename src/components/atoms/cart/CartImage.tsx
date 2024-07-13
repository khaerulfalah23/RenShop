import { Link } from 'react-router-dom';
import { useCartContext } from '../../contexts';

export function CartImage() {
  const { cart } = useCartContext();
  return (
    <Link to={`/product/${cart.id}`}>
      <img
        className='max-w-[80px]'
        src={cart.image}
        alt=''
      />
    </Link>
  );
}
