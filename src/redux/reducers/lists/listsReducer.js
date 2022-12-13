import { createSlice, current } from "@reduxjs/toolkit";
import { getTodoLists, postList, editList, delList, postItem, delItem, toggleIsDone } from "./asyncThunks";


export const listsSlice = createSlice({
  name: "lists",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    setLists(state, action) {
      state.data = action.payload;
    },


  },
  extraReducers(builder) {
    builder.addCase(getTodoLists.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getTodoLists.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(postList.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });

    builder.addCase(editList.fulfilled, (state, action) => {

      state.data = state.data.map((list) => {
        if (list.id === action.payload.id) {
          return action.payload
        }
        return list;
      })
    });

    builder.addCase(delList.fulfilled, (state, action) => {
      state.data = state.data.filter((list) => list.id !== action.payload);
    });

    builder.addCase(postItem.fulfilled, (state, action) => {
      const list = state.data.find(
        (list) => list.id === action.payload.data.id
      );

      if (list) {
        if (!Array.isArray(list.items)) {
          list.items = [];
        }
        list.items.push(action.payload.response);
      }
    });

    builder.addCase(toggleIsDone.fulfilled, (state, action) => {
      const list = state.data.find(
        (list) => list.id === action.payload.data.list.id
      );
      list.items.forEach((item) => {
        if (item.id === action.payload.data.item.id) {
          item.isDone = !item.isDone;
        }
      });
    });

    builder.addCase(delItem.fulfilled, (state, action) => {

      // const list = state.data.find((list) => list.id === action.payload.list.id);
      // list.items.filter((item) => item.id !== action.payload.itemId);

      //=================================

      state.data = state.data.map((innerList) => {
        if (action.payload.list.id === innerList.id) {
          return {
            ...innerList,
            items: innerList.items.filter(
              (item) => item.id !== action.payload.itemId
            ),
          };
        }
        return innerList;
      });

    });
  },
});

export const { } = listsSlice.actions;
export default listsSlice.reducer;
