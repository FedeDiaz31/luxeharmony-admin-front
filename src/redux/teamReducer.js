import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [];

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    addTeam(state, action) {
      return action.payload;
    },
  },
});

export const { addTeam } = teamSlice.actions;
export default teamSlice.reducer;
