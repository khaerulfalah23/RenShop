import { useProductContext } from "../../contexts";

export function ProductCategory() {
  const { product } = useProductContext();
  return (
    <div className='text-sm capitalize mb-1 text-gray-500'>
      {product.category}
    </div>
  );
}
