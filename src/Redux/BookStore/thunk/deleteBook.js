import { deleteBookFromStore } from "../actions";

const deleteBook = (id) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(deleteBookFromStore(id));
  };
};
export default deleteBook;
