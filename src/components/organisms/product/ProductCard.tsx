import { ProductImage } from "../../atoms";
import { ProductActions } from "../../molecules";

export function ProductCard() {
  return (
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <ProductImage />
      <ProductActions />
    </div>
  );
}
