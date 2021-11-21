import quotes from "./quotes.js";
import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";

const appReducer = combineReducers({
  quotes,
});

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

//Set store and redux deve tools
const store = createStoreWithMiddleware(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
