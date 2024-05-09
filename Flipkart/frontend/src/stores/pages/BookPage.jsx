import React, { useState } from "react";
import { booksData } from "../data/books";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
const BookPage = () => {
  const [selectedproduct, setSelectedProduct] = useState([]);
  const companyHandler = (mango) => {
    if (selectedproduct.includes(mango)) {
      setSelectedProduct(selectedproduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedproduct, mango]);
    }
  };
  const filteredProduct =
    selectedproduct.length === 0
      ? booksData
      : booksData.filter((orange) => selectedproduct.includes(orange.author));
  return (
    <>
      <NavBar />
      <div className="full-page">
        <div className="pro-selected">
          {booksData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedproduct.includes(phone.author)}
                    onChange={() => companyHandler(phone.author)}
                  />
                  {phone.author}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/books/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.title},{item.author}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookPage;
