import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalItems = state.totalItems + newItem.quantity || state.totalItems + 1;
      if (!existingItem) {
        const newCartItem = {
          itemId: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.quantity || 1) * newItem.price,
          name: newItem.title,
          image: newItem.image,
          stock: newItem.stock - newItem.quantity || newItem.stock -1
        };
        state.items.push(newCartItem);
    
        state.totalPrice += newCartItem.totalPrice;
      } else {
        
        if (newItem.quantity) {
          
          const itemPrice = existingItem.price * newItem.quantity;
          existingItem.quantity += newItem.quantity;
          existingItem.stock -= newItem.quantity; 
          existingItem.totalPrice += itemPrice;
          state.totalPrice += itemPrice;
        } else {
          existingItem.quantity++;
          existingItem.totalPrice += existingItem.price;
          state.totalPrice += existingItem.price;
        }
      }
    },

    removeItem(state, action) {
      const oldItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === oldItem.id
      );
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      state.totalItems--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.itemId !== existingItem.itemId
        );
        existingItem.stock++;
      } else {
        existingItem.quantity--;
        existingItem.stock++;
      }

      state.totalPrice -= existingItem.price;
    },

    removeProductFromCart (state, action) {
      
      const oldItemId = action.payload;
      const existingItem = state.items.find(
        (item)=> item.itemId === oldItemId
      );
      state.items = state.items.filter(
        (item) => item.itemId !== existingItem.itemId
      );
      state.totalPrice -= existingItem.totalPrice;
      state.totalItems -= existingItem.quantity;
    },

    clearCart(state) {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export default cartSlice;
export const { addItem, removeItem, removeProductFromCart, clearCart } = cartSlice.actions;
