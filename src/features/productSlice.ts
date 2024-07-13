import axios from 'axios';
import { Slice, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProductItems = createAsyncThunk<ProductItem[], void>(
  'fetch/productItems',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

interface prductSliceType {
  products: Array<ProductItem>;
  loading: boolean;
  error: string | undefined;
}

const initialState: prductSliceType = {
  products: [],
  loading: false,
  error: undefined,
};

const productSlice: Slice<prductSliceType> = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductItems.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
