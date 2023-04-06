import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const clientsSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {
        addClients(state, action) {
            return action.payload;

        },
        editClient(state, action) {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
        },
    },
});

export const { addClients, editClient } = clientsSlice.actions;
export default clientsSlice.reducer;