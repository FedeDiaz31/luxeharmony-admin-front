import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrders(state, action) {
            return action.payload;
        },
        editOrder(state, action) {
            return state.map((order) => {
                if (order._id === action.payload._id) {
                    return action.payload
                } else {
                    return order
                }
            })
        },
    },
});

export const { addOrders, editOrder } = ordersSlice.actions;
export default ordersSlice.reducer;