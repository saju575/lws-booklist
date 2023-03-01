import { updateBookToStore } from "../actions";

const updateBook = (bookinfo) => {
  const { id, ...others } = bookinfo;
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        ...others,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    // console.log(data);
    dispatch(updateBookToStore({ ...data }));
  };
};
export default updateBook;
