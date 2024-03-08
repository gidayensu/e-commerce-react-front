
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
  categories: [],
  loading: false,
  error: null,
};



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      updateCategories(state, action) {
        state.categories = action.payload.data;
        
      }
    },

  });

  export const {updateCategories} = categoriesSlice.actions;
export default categoriesSlice;

