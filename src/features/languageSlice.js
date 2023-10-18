import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'en',
  },
  reducers: {
    setLanguage: (state, action) => {
      if (state.value !== action.payload) {
        state.value = action.payload;
      }
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
