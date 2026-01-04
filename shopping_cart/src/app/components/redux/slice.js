import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.value += 1;
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeAllItems: (state) => {
      state.value = 0;
    },
  },
});

export const { addItem, removeItem, removeAllItems } = addToCart.actions;
export default addToCart.reducer;
