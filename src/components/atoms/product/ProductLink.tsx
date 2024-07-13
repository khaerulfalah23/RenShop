import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { useProductContext } from '../../contexts';

export function ProductLink() {
  const { product } = useProductContext();
  return (
    <Link
      to={`/product/${product.id}`}
      className='w-12 h-12 bg-white text-primary drop-shadow-xl flex justify-center items-center'>
      <BsEyeFill />
    </Link>
  );
}
