import { createSlice } from '@reduxjs/toolkit';

interface sidebarSliceType {
  isOpen: boolean;
}

const initialState: sidebarSliceType = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sedebarSlice',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
