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
      console.log(action.payload);
      return state.map((client) => {
        if (client._id === action.payload._id) {
          return action.payload;
        } else {
          return client;
        }
      });
    },
    deleteClient(state, action) {
      return state.filter((client) => client._id !== action.payload._id);
    },
    createClient(state, action) {
      return [...state, action.payload]
    },
  },
});

export const { addClients, editClient, deleteClient, createClient } =
  clientsSlice.actions;
export default clientsSlice.reducer;
