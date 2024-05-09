import React from "react";
import { booksData } from "../data/books";
const Books = () => {
  const firstfiveimages = booksData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Books</h2>
      </div>
      <div className="products-section">
        {firstfiveimages.map((item) => {
          return (
            <div className="image-section">
              <img className="image" src={item.image} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;
