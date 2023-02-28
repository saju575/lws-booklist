import React from "react";
import BookContainer from "../Components/BookContainer";
import { BookFormCard } from "../Components/BookFormCard";
import { Navbar } from "../Components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookContainer />
          <div>
            <BookFormCard />
          </div>
        </div>
      </main>
    </div>
  );
};
