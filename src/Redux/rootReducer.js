import { combineReducers } from "redux";
import bookReducer from "./BookStore/reducer";
import bookUpdateInfoReducer from "./BookInfoData/reducer";
import bookSearchReducer from "./BookSearchField/reducer";
const rootReducer = combineReducers({
  books: bookReducer,
  bookEditInfo: bookUpdateInfoReducer,
  bookSearch: bookSearchReducer,
});

export default rootReducer;
