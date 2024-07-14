import {createSlice } from '@reduxjs/toolkit';
export const HIGHEST_PRICE = 1000000;

const initialProductFilterState = {
    filteredProducts: [],
    category: '',
    minPrice: 0,
    sortDirection: "",
    maxPrice: HIGHEST_PRICE,
    searchValue: '',
    filtered: false,

  };
  
  const productFilterSlice = createSlice({
    name: 'productsFilter',
    initialState: initialProductFilterState,
    reducers: {
      clearFilters(state) {
        state.filteredProducts = [];
        state.category = '';
        state.minPrice = 0;
        state.maxPrice = HIGHEST_PRICE;
        state.sortDirection = '';
        state.filtered = false;
      },
  
      filterByCategory(state, action) {
        const category = action.payload.category;
        const productsData = action.payload.products;
        state.category = category;
        state.filteredProducts = filterProducts(productsData, state.minPrice, state.maxPrice, category, state.searchValue, state.sortDirection);
        
        state.filtered = true;
      },
  
      filterByPrice(state, action) {
        const minPrice = action.payload.minPrice;
        const maxPrice = action.payload.maxPrice;
        
        const productsData = action.payload.products;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
        state.filteredProducts = filterProducts(productsData, minPrice, maxPrice, state.category, state.searchValue, state.sortDirection);
        
        state.filtered = true;
        
      },
  
      filterBySearch(state, action) {
        
        const searchValue = action.payload.searchData;
        const productsData = action.payload.products;
        state.searchValue = searchValue;
        state.searchValue === '' ? state.filteredProducts = [] : state.filteredProducts = filterProducts(productsData, state.minPrice, state.maxPrice, state.category, searchValue, state.sortDirection);
        
        state.filtered = true;
        
      },

      sortProductsNamePrice(state,action) {
          const productsData = action.payload.products;
          state.sortDirection = action.payload.sortDirection;
          const sortedData = state.filteredProducts.length !==0 ? state.filteredProducts = sortProducts(state.filteredProducts, state.sortDirection) : sortProducts(productsData, state.sortDirection);
          state.filteredProducts = sortedData;
          state.filtered = true;
          
      },



    },
  });
  
  function sortProducts(productsData, sortDirection) {
    switch (sortDirection) {
      case "cheapest":
        return productsData.toSorted((a, b) => a.price - b.price);
  
      case "expensive":
        return productsData.toSorted((a, b) => b.price - a.price);
  
      case "nameZA":
        return productsData.toSorted((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA < nameB) return 1;
          if (nameA > nameB) return -1;
          return 0;
        });
  
      case "nameAZ":
        return productsData.toSorted((a, b) => {
          const nameA = a.title.toLowerCase();
          const nameB = b.title.toLowerCase();
          if (nameA > nameB) return 1;
          if (nameA < nameB) return -1;
          return 0;
        });
  
      default:
        return productsData;
    }
  }
  

  function filterProducts(productsData, minPrice, maxPrice, category, searchValue, sortDirection) {
    const filtered = productsData.filter(item => {
          const priceInRange =  item.price <= maxPrice && item.price >= minPrice;
          const categoryMatch = category === '' ? true : item.category === category;
          const searchMatch = searchValue === '' ? true : new RegExp(searchValue, 'i').test(item.title);
          return priceInRange && categoryMatch && searchMatch;
        }
    );
    
    if(sortDirection === '') {
      return filtered;
    } else {
      return sortProducts(filtered, sortDirection);
    }
  }
  
  
  export default productFilterSlice
  export const {clearFilters, filterByCategory, filterByPrice, filterBySearch, sortProductsNamePrice } = productFilterSlice.actions;
  
  
  