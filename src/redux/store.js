import { configureStore } from '@reduxjs/toolkit';
import businessInfoSlice from '../pages/BusinessInfo/BusinessInfoSlice';

export const store = configureStore({
  reducer: {
    businessinfo: businessInfoSlice,
  },
});
