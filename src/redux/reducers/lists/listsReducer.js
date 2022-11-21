import { createSlice } from "@reduxjs/toolkit";
import { getTodoLists } from "./asyncThunks";

export const listsSlice = createSlice({
  name: "lists",
  initialState: {
    data: [],
  },
  reducers: {
    setLists(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getTodoLists.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
// export const {} = listsSlice.actions;

export default listsSlice.reducer;
