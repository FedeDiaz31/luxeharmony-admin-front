import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts(state, action) {
      return action.payload;
    },
    editProduct(state, action) {
      return state.map((product) => {
        if (product._id === action.payload._id) {
          return action.payload;
        } else {
          return product;
        }
      });
    },
    deleteProduct(state, action) {
      return state.filter((product) => product._id !== action.payload._id);
    },
    createProduct(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addProducts, editProduct, deleteProduct, createProduct } =
  productSlice.actions;
export default productSlice.reducer;
