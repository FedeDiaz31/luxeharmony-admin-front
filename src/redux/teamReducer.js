import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam(state, action) {
      return action.payload;
    },
    createAdmin(state, action) {
      return [...state, action.payload]
    },
  },
});

export const { addTeam, createAdmin } = teamSlice.actions;
export default teamSlice.reducer;
