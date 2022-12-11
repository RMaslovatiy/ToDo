import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getLists,
  addListRequest,
  editListRequest,
  addItemRequest,
  deleteListRequest,
  changeIsDoneRequest,
  deleteItemRequest,
} from "../../../requests";

export const getTodoLists = createAsyncThunk("lists/getLists", async () => {
  const response = await getLists();
  return response;
});


export const postList = createAsyncThunk("lists/addListRequest", async (value) => {
  const data = { title: value }
  const response = await addListRequest(data);
  return response;
});

export const editList = createAsyncThunk("lists/editListRequest", async (data) => {
  const title = { title: data.value }
  const response = await editListRequest(data.list.id, title);
  return response
})

export const delList = createAsyncThunk("lists/deleteListRequest", async (id) => {
  await deleteListRequest(id);
  return id;
});

export const postItem = createAsyncThunk("lists/addItemRequest", async (data) => {
  const response = await addItemRequest(data.name, data.id);
  return { response, data };
});

export const toggleIsDone = createAsyncThunk("lists/changeIsDoneRequest", async (data) => {
  const response = await changeIsDoneRequest(data.item, data.list);;
  return { response, data };
});

export const delItem = createAsyncThunk("lists/deleteItemRequest", async (data) => {
  await deleteItemRequest(data.list.id, data.itemId);
  return data;
});





