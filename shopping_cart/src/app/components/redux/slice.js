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
      state.items.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    setQuntity: (state, action) => {
      const { id, quantity } = action.payload;

      const selectedItem = state.items.find((item) => item.id === id);
      if (selectedItem) {
        selectedItem.quantity = quantity;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, setQuntity, removeItem, removeAllItems } = addToCart.actions;
export default addToCart.reducer;
