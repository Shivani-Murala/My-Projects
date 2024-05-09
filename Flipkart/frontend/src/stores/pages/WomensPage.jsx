import React, { useState } from "react";
import { womanData } from "../data/woman";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
const WomensPage = () => {
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
      ? womanData
      : womanData.filter((orange) => selectedproduct.includes(orange.brand));
  return (
    <>
      <NavBar />
      <div className="full-page">
        <div className="pro-selected">
          {womanData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedproduct.includes(phone.brand)}
                    onChange={() => companyHandler(phone.brand)}
                  />
                  {phone.brand}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/womens/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.brand},{item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WomensPage;
