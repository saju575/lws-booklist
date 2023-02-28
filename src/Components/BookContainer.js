import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../Redux/BookStore/thunk/fetchBooks";
import { BookCard } from "./BookCard";
import { BookContainerTab } from "./BookContainerTab";

const BookContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="order-2 xl:-order-1">
      <BookContainerTab />
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}

        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookContainer;
