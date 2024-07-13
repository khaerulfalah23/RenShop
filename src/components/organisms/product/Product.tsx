import { useEffect } from 'react';
import { ProductSection } from './ProductSection';
import { ProductProvider } from '../../contexts';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { fetchProductItems } from '../../../features/productSlice';

export function Product() {
  const dispatch = useDispatch<AppDispatch>();

  const productItems = useSelector(
    (state: RootState) => state.productSlice.products
  );

  const filteredProducts = productItems?.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  useEffect(() => {
    dispatch(fetchProductItems());
  }, [dispatch]);

  return (
    <ProductSection>
      {filteredProducts?.map((product) => (
        <ProductProvider
          key={product.id}
          product={product}>
          <ProductProvider.Card />
          <ProductProvider.Description />
        </ProductProvider>
      ))}
    </ProductSection>
  );
}
