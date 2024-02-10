// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer ,{setAuth} from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
});
export default store;
