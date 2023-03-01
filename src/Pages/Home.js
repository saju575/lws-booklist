import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BookContainer from "../Components/BookContainer";
import { BookFormCard } from "../Components/BookFormCard";
import { Navbar } from "../Components/Navbar";
import { clearBookInfo } from "../Redux/BookInfoData/actions";
import addBook from "../Redux/BookStore/thunk/addBook";
import updateBook from "../Redux/BookStore/thunk/updateBook";

export const Home = () => {
  /* A local state for user click update button or not */
  const [isClickUpdate, setIsClickUpdate] = useState(false);

  /*Get the book information which the user click to update*/
  const bookEditInfo = useSelector((state) => state.bookEditInfo);

  /*Dispatch that used to dispatch action*/
  const dispatch = useDispatch();

  /*handle add book*/
  const handleAddBook = (data) => {
    dispatch(addBook(data));
  };

  /*handle update book*/
  const handleUpdateBook = (data) => {
    dispatch(updateBook(data));
    dispatch(clearBookInfo());
    setIsClickUpdate(false);
  };
  return (
    <div>
      {/* used for show to navbar section */}
      <Navbar />

      {/* all books card and the form container section */}
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {/* BookContainer Component is used to display all the books card */
          /* It's functionality is implimanted in Component folder named with BookContainer */}

          <BookContainer isOnEdit={setIsClickUpdate} />

          {/* BookFormCard Component is used to display the form card that is used to edit the book and add the */
          /* book to the store.Handled conditionally. It's functionality is implimanted in Component folder named with BookFormCard  */}
          <div>
            {!isClickUpdate ? (
              <BookFormCard
                handleSubmit={handleAddBook}
                formType={"ADD BOOK"}
              />
            ) : (
              <BookFormCard
                editBookInfo={bookEditInfo}
                handleSubmit={handleUpdateBook}
                formType={"UPDATE BOOK"}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
