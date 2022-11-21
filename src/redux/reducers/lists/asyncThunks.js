import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLists } from "../../../requests";

export const getTodoLists = createAsyncThunk("lists/getLists", async () => {
  const response = await getLists();
  return response;
});
