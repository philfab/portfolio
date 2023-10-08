import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    activeButton: 'Home',
  },
  reducers: {
    setActiveButton: (state, action) => {
      state.activeButton = action.payload;
    },
  },
});

export const { setActiveButton } = contentSlice.actions;
export default contentSlice.reducer;