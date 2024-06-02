
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  categories: [],
  selectedCategory: '',
  loading: false,
  error: null,
};



const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
      updateCategories(state, action) {
        state.categories = action.payload.data;
        
      },

      selectedCategory(state, action) {
        state.selectedCategory = action.payload.category;
      }
    },

  });

  export const {updateCategories, selectedCategory} = categoriesSlice.actions;
export default categoriesSlice;

