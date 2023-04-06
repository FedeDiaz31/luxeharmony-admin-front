import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts(state, action) {
            return action.payload;
        },

    },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;