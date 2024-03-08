import {createSlice } from '@reduxjs/toolkit';
const highestPossiblePrice = 1000000000;

const initialProductFilterState = {
    filteredProducts: [],
    category: '',
    minPrice: 0,
    sortDirection: "",
    maxPrice: highestPossiblePrice,
    searchValue: '',
    filtered: false,
    categoryCounts: {
      "smartphones": 5,
    "laptops": 5,
    "fragrances": 5,
    "skincare": 5,
    "groceries": 5,
    "home-decoration": 5,
    "furniture": 5,
    "tops": 5,
    "womens-dresses": 5,
    "womens-shoes": 5,
    "mens-shirts": 5,
    "mens-shoes": 5,
    "mens-watches": 5,
    "womens-watches": 5,
    "womens-bags": 5,
    "womens-jewellery": 5,
    "sunglasses": 5,
    "automotive": 5,
    "motorcycle": 5,
    "lighting": 5
    },
  };
  
  const productFilterSlice = createSlice({
    name: 'product',
    initialState: initialProductFilterState,
    reducers: {
      clearFilters(state) {
        state.filteredProducts = [];
        state.category = '';
        state.minPrice = 0;
        state.maxPrice = highestPossiblePrice;
        state.categoryCounts = {};
        state.sortDirection = '';
        state.filtered = false;
      },
  
      filterByCategory(state, action) {
        const category = action.payload.category;
        const data = action.payload.products;
        state.category = category;
        state.filteredProducts = filterProducts(data, state.minPrice, state.maxPrice, category, state.searchValue, state.sortDirection);
        state.categoryCounts = countProductsByCategory(state.filteredProducts);
      },
  
      filterByPrice(state, action) {
        const minPrice = action.payload.minPrice;
        const maxPrice = action.payload.maxPrice;
        const data = action.payload.products;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
        state.filteredProducts = filterProducts(data, minPrice, maxPrice, state.category, state.searchValue, state.sortDirection);
        state.categoryCounts = countProductsByCategory(state.filteredProducts);
      },
  
      filterBySearch(state, action) {
        const searchValue = action.payload.eventData;
        const data = action.payload.products;
        state.searchValue = searchValue;
        state.filteredProducts = filterProducts(data, state.minPrice, state.maxPrice, state.category, searchValue, state.sortDirection);
        state.categoryCounts = countProductsByCategory(state.filteredProducts);
      },

      sortProductsNamePrice(state,action) {
          const data = action.payload.products;
          state.sortDirection = action.payload.sortDirection;
          const sortedData = state.filteredProducts.length !==0 ? state.filteredProducts = sortProducts(state.filteredProducts, state.sortDirection) : sortProducts(data, state.sortDirection);
          state.filteredProducts = sortedData;
      },



    },
  });
  
  function sortProducts(data, sortDirection ) {
    if(sortDirection==="cheapest") {
      return data.toSorted((a,b)=> a.price - b.price)
    } 
    if(sortDirection === "expensive") {
      return data.toSorted((a,b)=> b.price - a.price);
    }   
    
    if (sortDirection === "nameZA") {
      return data.toSorted((a,b)=> {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    
    if (sortDirection === "nameAZ") {
      return data.toSorted((a,b)=> {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA > nameB) {
          return 1;
        }
        if (nameA < nameB) {
          return -1;
        } else {
          return 0;
        }
      })
    }
  }

  function filterProducts(data, minPrice, maxPrice, category, searchValue, sortDirection) {
    const filtered = data.filter(item => {
          const priceInRange = maxPrice === highestPossiblePrice ? item.price !== maxPrice : item.price <= maxPrice && item.price >= minPrice;
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
  
  
  function countProductsByCategory(products) {
    const categoryCounts = {};
    products.forEach(product => {
      const category = product.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });
    return categoryCounts;
  }


  export default productFilterSlice
  export const {clearFilters, filterByCategory, filterByPrice, filterBySearch, sortProductsNamePrice } = productFilterSlice.actions;
  
  
  