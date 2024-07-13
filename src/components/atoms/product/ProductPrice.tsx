import { useProductContext } from '../../contexts';

export function ProductPrice() {
  const { product } = useProductContext();
  return <div className='font-semibold'>$ {product.price}</div>;
}
