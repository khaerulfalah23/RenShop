import { ProductCategory, ProductPrice, ProductTitle } from "../../atoms";

export function ProductDescription() {
  return (
    <div>
      <ProductCategory />
      <ProductTitle />
      <ProductPrice />
    </div>
  );
}
