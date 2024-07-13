import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailProvider } from '../../contexts';
import { ProductDetailSection } from './ProductDetailSection';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { ProductDetailLoading } from '../../atoms';
import { fetchProductItems } from '../../../features/productSlice';

export function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector(
    (state: RootState) => state.productSlice.products
  );

  const product = products.find((item) => {
    return id !== undefined && item.id === parseInt(id);
  });

  useEffect(() => {
    dispatch(fetchProductItems());
  }, [dispatch]);

  if (!product) {
    return <ProductDetailLoading />;
  }

  return (
    <ProductDetailSection>
      <ProductDetailProvider productDetail={product}>
        <ProductDetailProvider.Image />
        <ProductDetailProvider.Information />
      </ProductDetailProvider>
    </ProductDetailSection>
  );
}
