import { ADD_BOOK_INFO, CLEAR_BOOK_INFO } from "./actionTypes";

export const addBookInfo = (data) => {
  return {
    type: ADD_BOOK_INFO,
    payload: data,
  };
};
export const clearBookInfo = () => {
  return {
    type: CLEAR_BOOK_INFO,
  };
};
