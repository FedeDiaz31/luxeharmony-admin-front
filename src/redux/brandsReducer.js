import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {
        addBrands(state, action) {
            return action.payload;
        },

    },
});

export const { addBrands } = brandSlice.actions;
export default brandSlice.reducer;