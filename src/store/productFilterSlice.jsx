import {createSlice } from '@reduxjs/toolkit';
const highestPossiblePrice = 1000000000;

const initialProductFilterState = {
    products: [],
    category: '',
    minPrice: 0,
    maxPrice: highestPossiblePrice,
    searchValue: '',
    categoryCounts: {},
  };
  
  const productFilterSlice = createSlice({
    name: 'product',
    initialState: initialProductFilterState,
    reducers: {
      clearFilters(state) {
        state.products = [];
        state.category = '';
        state.minPrice = 0;
        state.maxPrice = highestPossiblePrice;
        state.categoryCounts = {};
      },
  
      filterByCategory(state, action) {
        const category = action.payload.category;
        const data = action.payload.data;
        state.category = category;
        state.products = filterProducts(data, state.minPrice, state.maxPrice, category, state.searchValue);
        state.categoryCounts = countProductsByCategory(state.products);
      },
  
      filterByPrice(state, action) {
        const minPrice = action.payload.minPrice;
        const maxPrice = action.payload.maxPrice;
        const data = action.payload.data;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
        state.products = filterProducts(data, minPrice, maxPrice, state.category, state.searchValue);
        state.categoryCounts = countProductsByCategory(state.products);
      },
  
      filterBySearch(state, action) {
        const searchValue = action.payload.eventData;
        const data = action.payload.data;
        state.searchValue = searchValue;
        state.products = filterProducts(data, state.minPrice, state.maxPrice, state.category, searchValue);
        state.categoryCounts = countProductsByCategory(state.products);
        console.log(state.categoryCounts)
      },
    },
  });
  
  
  function filterProducts(data, minPrice, maxPrice, category, searchValue) {
    return data.filter(item => {
      const priceInRange = maxPrice === highestPossiblePrice ? item.price !== maxPrice : item.price <= maxPrice && item.price >= minPrice;
      const categoryMatch = category === '' ? true : item.category === category;
      const searchMatch = searchValue === '' ? true : new RegExp(searchValue, 'i').test(item.title);
      return priceInRange && categoryMatch && searchMatch;
    });
  }
  
  
  function countProductsByCategory(products) {
    const categoryCounts = {};
    products.forEach(product => {
      const category = product.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    return categoryCounts;
  }


  export default productFilterSlice
  export const {clearFilters, filterByCategory, filterByPrice, filterBySearch} = productFilterSlice.actions;
  
  
  