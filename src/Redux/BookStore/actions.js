import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK } from "./actionTypes";

export const loadBooks = (books) => {
  return {
    type: LOAD_BOOKS,
    payload: books,
  };
};

export const addBookToStore = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBookFromStore = (id) => {
  return {
    type: DELETE_BOOK,
    id,
  };
};

export const updateBook = (id, bookInfo) => {
  return {
    type: UPDATE_BOOK,
    payload: bookInfo,
    id,
  };
};
