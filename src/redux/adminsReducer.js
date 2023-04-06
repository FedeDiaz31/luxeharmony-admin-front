import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addAdmins(state, action) {
            return action.payload;
        },
    },
});

export const { addAdmins } = adminSlice.actions;
export default adminSlice.reducer;