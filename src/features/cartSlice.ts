import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface cartSliceType {
  cartItems: ProductItem[];
  itemAmount: number;
  totalPrice: number;
}

const initialState: cartSliceType = {
  cartItems: [],
  itemAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItem>) => {
      const newItem = { ...action.payload, amount: 1 };
      // check if the item is already in the cart
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      // if cart item is already in the cart
      if (cartItem) {
        const newCart = [...state.cartItems].map((item) => {
          if (item.id === newItem.id) {
            return { ...item, amount: cartItem.amount + 1 };
          } else {
            return item;
          }
        });
        state.cartItems = newCart;
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const newCart = state.cartItems.filter((item) => {
        return item.id !== action.payload;
      });
      state.cartItems = newCart;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    increaseAmount: (state, action: PayloadAction<number>) => {
      const newCart = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      state.cartItems = newCart;
    },
    decreaseAmount: (state, action: PayloadAction<number>) => {
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      state.cartItems = updatedCartItems.filter((item) => item.amount > 1);
    },
    setItemAmount: (state) => {
      const itemAmount = state.cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      state.itemAmount = itemAmount;
    },
    setTotalPrice: (state) => {
      const totalPrice = state.cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);
      state.totalPrice = totalPrice;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseAmount,
  decreaseAmount,
  setItemAmount,
  setTotalPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
