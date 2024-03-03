import {createSlice, configureStore } from '@reduxjs/toolkit';

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

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default store;