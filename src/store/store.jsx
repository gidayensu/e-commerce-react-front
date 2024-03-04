import {createSlice, configureStore } from '@reduxjs/toolkit';

const highestPossiblePrice = 1000000000;

const filterPrice = (data, minPrice, maxPrice) => {
    if(maxPrice === highestPossiblePrice) {
      return data.filter((item)=> item.price !== maxPrice)
    } else {
   return data.filter((item)=> item.price <= maxPrice && item.price >= minPrice)
  }
};

const filterCategory = (data, string)=> {
  if(string ==='') {
    return data.filter((item)=> item.category !== string); 
  } else {
   return data.filter((item)=> item.category === string);}
}

const filterSearch = (data, string)=> {
  const regex = new RegExp(string, 'i')
  return data.filter((item) => regex.test(item.title));
}



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
searchValue: ''
}

const productFilterSlice = createSlice({
  name: 'product',
  initialState: initialProductFilterState,
  reducers: {

      clearFilters (state) {
        state.products = [];
        state.category = '';
        state.minPrice = 0;
        state.maxPrice = highestPossiblePrice
      }, 

      filterByCategory(state, action) {
          const category = action.payload.category;
          const data = action.payload.data;
          state.category = category;
          const filteredCategory = filterCategory(data, category);
          const filteredProducts = filterPrice(filteredCategory, state.minPrice, state.maxPrice);
          state.products = filteredProducts;

      },

      filterByPrice(state, action) {
        const minPrice = action.payload.minPrice;
        const maxPrice = action.payload.maxPrice;
        const data = action.payload.data;
        state.minPrice = minPrice;
        state.maxPrice = maxPrice;
        const filteredPrice = filterPrice(data, minPrice, maxPrice);
        const filteredProducts = filterCategory(filteredPrice, state.category)
        console.log(filteredProducts)
        state.products = filteredProducts;
      }, 

      filterBySearch (state, action) {
        const searchValue = action.payload.eventData;
        const data = action.payload.data;
        state.searchValue = searchValue;
        let filteredSearch = filterSearch(data, searchValue);
        if(state.maxPrice !== highestPossiblePrice) {
          filteredSearch = filterPrice(filteredSearch, state.minPrice, state.maxPrice)
        }

        if(state.category!=='') {
          filteredSearch = filterPrice(filteredSearch, state.category)
        } 

        state.products = filteredSearch;

      }
  }
})
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filter: productFilterSlice.reducer,
    }
})

export const {clearFilters, filterByCategory, filterByPrice, filterBySearch} = productFilterSlice.actions;
export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default store;