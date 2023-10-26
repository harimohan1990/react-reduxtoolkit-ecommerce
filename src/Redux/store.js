import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import cartcounter from './slices/cartSlice';


const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartcounter
  },
});

export default store;
