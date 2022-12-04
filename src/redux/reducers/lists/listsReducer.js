import { createSlice, current } from "@reduxjs/toolkit";
import { getTodoLists, postList, postItem } from "./asyncThunks";
import { deleteListRequest, changeIsDoneRequest, deleteItemRequest } from "../../../requests";



export const listsSlice = createSlice({
  name: "lists",
  initialState: {
    data: [],


  },
  reducers: {
    setLists(state, action) {
      state.data = action.payload;
    },

    delList(state, action) {
      state.data = state.data.filter(list => list.id !== action.payload)
      deleteListRequest(action.payload)
    },

    delItem(state, action) {

      state.data = state.data.map((innerList) => {
        if (action.payload.list.id === innerList.id) {
          return {
            ...innerList,
            items: innerList.items.filter((item) => item.id !== action.payload.item),
          };
        }
        return innerList;
      })
      deleteItemRequest(action.payload.list.id, action.payload.item)
    },

    toggleIsDone(state, action) {
      changeIsDoneRequest(action.payload.item, action.payload.list)
      return {
        ...state.data,
        data: state.data.map(list => list.id === action.payload.list.id
          ? {
            ...list,
            items: list.items.map(item => item.id === action.payload.item.id
              ? {
                ...item,
                isDone: !action.payload.item.isDone
              }
              : item
            ),
          }
          : list
        ),
      };
    }



  },
  extraReducers(builder) {
    builder.addCase(getTodoLists.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(postList.fulfilled, (state, action) => {
      state.data = [...state.data, action.payload]
    });
    builder.addCase(postItem.fulfilled, (state, action) => {
      return {
        ...state.data,
        data: state.data.map(list => list.id === action.payload.data.id
          ? {
            ...list,
            items: [...list.items, action.payload.response]
          }
          : list
        ),
      };
    });
  },
});

export const { addList, delList, delItem, toggleIsDone } = listsSlice.actions
export default listsSlice.reducer;
