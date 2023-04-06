import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrders(state, action) {
            return action.payload;
        },
        editOrders(state, action) {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
        },
    },
});

export const { addOrders, editOrders } = ordersSlice.actions;
export default ordersSlice.reducer;