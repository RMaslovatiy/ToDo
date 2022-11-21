import { compose, createStore } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;

const store = createStore(rootReducer, initialState, composeFunc());

export default store;