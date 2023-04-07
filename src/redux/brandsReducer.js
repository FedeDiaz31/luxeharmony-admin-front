import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrands(state, action) {
      return action.payload;
    },
    editBrand(state, action) {
      return state.map((brand) => {
        if (brand._id === action.payload._id) {
          return action.payload;
        } else {
          return brand;
        }
      });
    },
    deleteBrand(state, action) {
      return state.filter((brand) => brand._id !== action.payload._id);
    },
    createBrand(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addBrands, editBrand, deleteBrand, createBrand } =
  brandSlice.actions;
export default brandSlice.reducer;
