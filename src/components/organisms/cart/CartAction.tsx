import { CartControls, CartHeader } from '../../molecules';

export function CartAction() {
  return (
    <div className='w-full flex flex-col'>
      <CartHeader />
      <CartControls />
    </div>
  );
}
