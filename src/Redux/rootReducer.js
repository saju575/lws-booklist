import { combineReducers } from "redux";
import bookReducer from "./BookStore/reducer";
const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
