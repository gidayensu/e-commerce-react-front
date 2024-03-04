import {createSlice, configureStore } from '@reduxjs/toolkit';

const highestPossiblePrice = 1000000000;

// function countProductsByCategory(products) {
//   const categoryCounts = {};
//   products.forEach((product) => {
//     const category = product.category; // Assuming each product object has a 'category' property
//     if (categoryCounts[category]) {
//       categoryCounts[category]++;
//     } else {
//       categoryCounts[category] = 1;
//     }
//   });
//   return categoryCounts;
// }

// const filterPrice = (data, minPrice, maxPrice) => {
//     if(maxPrice === highestPossiblePrice) {
//       return data.filter((item)=> item.price !== maxPrice)
//     } else {
//    return data.filter((item)=> item.price <= maxPrice && item.price >= minPrice)
//   }
// };

// const filterCategory = (data, string)=> {
//   if(string ==='') {
//     return data.filter((item)=> item.category !== string); 
//   } else {
//    return data.filter((item)=> item.category === string);}
// }

// const filterSearch = (data, string)=> {
//   const regex = new RegExp(string, 'i')
//   return data.filter((item) => regex.test(item.title));
// }



const initialCartState = {
    items: [],
    totalItems: 0,
    totalPrice: 0,
    
}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );

      if (!existingItem) {
        const newCartItem = {
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.quantity || 1) * newItem.price,
          name: newItem.title,
          image: newItem.image
        };
        state.items.push(newCartItem)
        state.totalItems++;
        
        state.totalPrice += newCartItem.totalPrice;
      } else {
        if(newItem.quantity) {
          const itemPrice = existingItem.price * newItem.quantity;
          existingItem.quantity+= newItem.quantity
          existingItem.totalPrice += itemPrice; 
          state.totalPrice += itemPrice;  
        } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
        state.totalPrice += existingItem.price;
}      }

  
      
    },

    removeItem(state, action) {
      const oldItem = action.payload;
      const existingItem = state.items.find((item) => item.itemId === oldItem.id);
      
      if (existingItem.quantity === 1) {
        
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price; 
        state.items = state.items.filter(item=>item.itemId !== existingItem.itemId)
        state.totalItems--;
        
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      
      state.totalPrice -= existingItem.price;
      
      
    },

    clearCart(state) {
        state.items = [];
        state.totalItems= 0;
        state.totalPrice= 0;
    },
  },
});

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


// if(state.maxPrice !== highestPossiblePrice) {
        //   filteredSearch = filterPrice(filteredSearch, state.minPrice, state.maxPrice)
        // }

        
        // if(state.category!=='') {
        //   filteredSearch = filterCategory(filteredSearch, state.category)
        // } 

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filter: productFilterSlice.reducer,
    }
})

export const {clearFilters, filterByCategory, filterByPrice, filterBySearch} = productFilterSlice.actions;
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default store;