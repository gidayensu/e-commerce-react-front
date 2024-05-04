import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.jsx';
import productFilterSlice from './productFilterSlice.jsx';
import productSlice from './productSlice.jsx';
import singleProductSlice from './singleProductSlice.jsx';
import categoriesSlice from './categoriesSlice.jsx';


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