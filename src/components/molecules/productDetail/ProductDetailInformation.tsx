import { ProductDetailButton, ProductDetailDescription } from '../../atoms';

export function ProductDetailInformation() {
  return (
    <div className='flex-1 text-center lg:text-left'>
      <ProductDetailDescription />
      <ProductDetailButton />
    </div>
  );
}
