import { ADD_BOOK_INFO, CLEAR_BOOK_INFO } from "./actionTypes";
import bookInfoData from "./initialState";

const bookUpdateInfoReducer = (state = bookInfoData, action) => {
  switch (action.type) {
    case ADD_BOOK_INFO:
      return { ...action.payload };
    case CLEAR_BOOK_INFO:
      return {};
    default:
      return state;
  }
};
export default bookUpdateInfoReducer;
