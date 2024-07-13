import { Link } from "react-router-dom";
import { useProductContext } from "../../contexts";

export function ProductTitle() {
  const { product } = useProductContext();
  return (
    <Link to={`product/${product.id}`}>
      <h2 className='font-semibold mb-1'>{product.title}</h2>
    </Link>
  );
}
