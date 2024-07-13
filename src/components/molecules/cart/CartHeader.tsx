import { CartRemove, CartTitle } from '../../atoms';

export function CartHeader() {
  return (
    <div className='flex justify-between mb-2'>
      <CartTitle />
      <CartRemove />
    </div>
  );
}
