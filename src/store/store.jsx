import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice.jsx';
import productFilterSlice from './productFilterSlice.jsx';



const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filter: productFilterSlice.reducer,
    }
})


export default store;