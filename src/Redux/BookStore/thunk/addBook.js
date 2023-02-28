import { addBookToStore } from "../actions";

const addBook = (bookInfo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        ...bookInfo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();

    dispatch(addBookToStore(data));
  };
};
export default addBook;
