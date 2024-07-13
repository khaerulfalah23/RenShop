import { useCartContext } from '../../contexts';

export function CartPrice() {
  const { cart } = useCartContext();
  return (
    <>
      <div className='flex-1 flex items-center justify-around'>
        $ {cart.price}
      </div>
      <div className='flex flex-1 justify-end items-center text-primary font-medium'>{`$ ${parseFloat(
        (cart.price * cart.amount).toString()
      ).toFixed(2)}`}</div>
    </>
  );
}
