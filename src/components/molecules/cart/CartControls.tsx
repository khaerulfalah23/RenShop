import { CartPrice, CartQuantityControl } from '../../atoms';

export function CartControls() {
  return (
    <div className='flex gap-x-2 h-[36px] text-sm'>
      <CartQuantityControl />
      <CartPrice />
    </div>
  );
}
