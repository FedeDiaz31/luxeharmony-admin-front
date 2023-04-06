import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const clientsSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        addClients(state, action) {
            return action.payload;
        },
        editOrder(state, action) {
            return state.map((client) => {
                if (client._id === action.payload._id) {
                    return action.payload
                } else {
                    return client
                }
            })
        },
    },
});

export const { addClients, editClient } = clientsSlice.actions;
export default clientsSlice.reducer;