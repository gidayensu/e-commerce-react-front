import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.js';
import productFilterSlice from './productFilterSlice.js';
import productSlice from './productSlice.js';
import singleProductSlice from './singleProductSlice.js';
import categoriesSlice from './categoriesSlice.js';


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filter: productFilterSlice.reducer,
        products: productSlice.reducer,
        singleProduct: singleProductSlice.reducer,
        categories: categoriesSlice.reducer
    }
})


export default store;