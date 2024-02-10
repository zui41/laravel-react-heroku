// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
  },
  reducers: {
    setAuth: (state, action) => {
      return { user: action.payload }; 
    },
    // Add other reducers as needed
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
