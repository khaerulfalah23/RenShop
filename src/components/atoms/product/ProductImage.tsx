import { useProductContext } from '../../contexts';

export function ProductImage() {
  const { product } = useProductContext();
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='w-[200px] mx-auto flex justify-center items-center'>
        <img
          className='max-h-[160px] group-hover:scale-110 transition duration-300'
          src={product.image}
          alt=''
        />
      </div>
    </div>
  );
}
