import { createSlice, current } from "@reduxjs/toolkit";
import { getTodoLists, postList, delList, postItem, delItem, toggleIsDone } from "./asyncThunks";


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

    builder.addCase(postList.fulfilled, (state, action) => {
      state.data.push(action.payload);
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
      console.log(action.payload)

      // const list = state.data.find(
      //   (list) => list.id === action.payload.list.id
      // );
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
