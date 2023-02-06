import {configureStore} from '@reduxjs/toolkit';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';
import uiSlice from './uiSlice';

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store;