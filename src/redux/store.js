import { configureStore } from "@reduxjs/toolkit";
import lists from "./reducers/lists/listsReducer";

export default configureStore({
  reducer: {
    lists,
  },
});
