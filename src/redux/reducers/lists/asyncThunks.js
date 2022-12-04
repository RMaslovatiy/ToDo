import { createAsyncThunk } from "@reduxjs/toolkit";
import { getLists, addListRequest, addItemRequest } from "../../../requests";

export const getTodoLists = createAsyncThunk("lists/getLists", async () => {
  const response = await getLists();
  return response;
});


export const postList = createAsyncThunk("lists/addListRequest", async (value) => {
  const data = { title: value }
  const response = await addListRequest(data);
  return response;
});

export const postItem = createAsyncThunk("lists/addItemRequest", async (data) => {
  const response = await addItemRequest(data.name, data.id);
  return { response, data };
});



