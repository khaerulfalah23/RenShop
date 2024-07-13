import { useProductDetailContext } from '../../contexts';

export function ProductDetailDescription() {
  const {
    productDetail: { title, price, description },
  } = useProductDetailContext();
  return (
    <>
      <h1 className='text-[26px] font-medium mb-2 max-w-[420px] mx-auto lg:mx-0'>
        {title}
      </h1>
      <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
      <p className='mb-8'>{description}</p>
    </>
  );
}
