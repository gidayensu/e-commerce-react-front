
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=0');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const productsData = await response.json();
        return productsData;
      } catch (error) {
        throw new Error('Failed to fetch data');
      }
    }
  );

const initialState = {
  products: [],
  loading: false,
  error: null,
};



const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      updateProducts(state, action) {
        const data = action.payload;
        state.products = data;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export const {updateProducts} = productSlice.actions;
export default productSlice;

