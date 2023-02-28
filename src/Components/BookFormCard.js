import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../Redux/BookStore/thunk/addBook";

export const BookFormCard = () => {
  const [bookFormInfo, setBookFormInfo] = useState({});
  const dispatch = useDispatch();
  // onChange handler for book form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setBookFormInfo((allValue) => {
      return {
        ...allValue,
        [name]: value,
        featured: e.target.checked || false,
      };
    });
  };
  // onSubmit handler for book form
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addBook(bookFormInfo));
    setBookFormInfo({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      description: "",
      featured: false,
    });
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="input-Bookname">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={bookFormInfo.name || ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="input-Bookauthor">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={bookFormInfo.author || ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="input-Bookthumbnail">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={bookFormInfo.thumbnail || ""}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="input-Bookprice">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={bookFormInfo.price || ""}
              onChange={(e) => {
                setBookFormInfo({
                  ...bookFormInfo,
                  price: e.target.valueAsNumber,
                });
              }}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="input-Bookrating">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={bookFormInfo.rating || ""}
              onChange={(e) => {
                setBookFormInfo({
                  ...bookFormInfo,
                  rating: e.target.valueAsNumber,
                });
              }}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={bookFormInfo.featured || false}
            onChange={handleChange}
          />
          <label htmlFor="input-Bookfeatured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};
