import React from "react";
import { BookCard } from "./BookCard";
import { BookContainerTab } from "./BookContainerTab";

const BookContainer = () => {
  return (
    <div className="order-2 xl:-order-1">
      <BookContainerTab />
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        <BookCard />
      </div>
    </div>
  );
};

export default BookContainer;
