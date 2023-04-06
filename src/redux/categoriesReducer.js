import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategories(state, action) {
            return action.payload;
        },
    },
});

export const { addCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;