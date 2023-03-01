import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../Redux/BookStore/thunk/fetchBooks";
import { BookCard } from "./BookCard";
import BookContainerTab from "./BookContainerTab";

// tab bar items defined
const ALL = "all";
const FEATURED = "featured";

const BookContainer = ({ isOnEdit }) => {
  /*get all books from the redux store*/
  const books = useSelector((state) => state.books);

  /*get search book by name input field text*/
  const searchText = useSelector((store) => store.bookSearch);

  /*state selected tab */
  const [selectedTab, setSelectedTab] = useState(ALL);

  /*for dispatch actions*/
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  return (
    <div className="order-2 xl:-order-1">
      {/* BookContainerTab used to display the tab that includes "ALL" and "Featured" tab.Funtionality is
      implemented in Component folder named by BookContainerTab.js */}

      <BookContainerTab
        setSelectedTab={setSelectedTab}
        getSelectedTab={selectedTab}
      />
      <div className="lws-bookContainer">
        {/* <!-- Show all books card using filtering .BookCard Funtionality is
      implemented in Component folder named by BookCard.js--> */}

        {books
          .filter((book) => {
            switch (selectedTab) {
              case FEATURED:
                return book.featured;
              default:
                return book;
            }
          })
          .filter((book) => {
            return book.name
              .toLowerCase()
              .includes(searchText.searchedText.toLowerCase());
          })
          .map((book) => (
            <BookCard key={book.id} book={book} isOnEdit={isOnEdit} />
          ))}
      </div>
    </div>
  );
};

export default BookContainer;
