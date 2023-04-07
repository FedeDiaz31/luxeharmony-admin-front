import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam(state, action) {
      return action.payload;
    },
    editAdmin(state, action) {
      return state.map((admin) => {
        if (admin._id === action.payload._id) {
          return action.payload;
        } else {
          return admin;
        }
      });
    },
    deleteAdmin(state, action) {
      return state.filter((admin) => admin._id !== action.payload._id);
    },
    createAdmin(state, action) {
      return [...state, action.payload];
    },
  },
});

export const { addTeam, editAdmin, deleteAdmin, createAdmin } =
  teamSlice.actions;
export default teamSlice.reducer;
