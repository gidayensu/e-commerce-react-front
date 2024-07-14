import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    productCategory: ''
}

const singleProductSlice = createSlice({
    name: 'single-product',
    initialState: initialState,
    reducers: {
        getProductData(state, action) {
            state.productData = action.payload.productData;
            state.productCategory = action.payload.productCategory;
        }
    }

})

export default singleProductSlice;

export const {getProductData} = singleProductSlice.actions;