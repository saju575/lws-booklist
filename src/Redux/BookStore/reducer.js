import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS } from "./actionTypes";
import bookStore from "./initialState";

const newBookId = (state) => {
  const currentLastId = state.reduce(
    (maxId, item) => Math.max(item.id, maxId),
    -1
  );
  return currentLastId + 1;
};

const bookReducer = (state = bookStore, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return [...action.payload];

    case ADD_BOOK:
      return [
        ...state,
        {
          ...action.payload,
          //id: newBookId(state),
        },
      ];

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default bookReducer;
