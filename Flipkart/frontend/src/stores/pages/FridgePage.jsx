import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
const FridgePage = () => {
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
      ? fridgeData
      : fridgeData.filter((orange) => selectedproduct.includes(orange.brand));
  return (
    <>
      <NavBar />
      <div className="full-page">
        <div className="pro-selected">
          {fridgeData.map((phone) => {
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
                <Link to={`/fridge/${item.id}`}>
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

export default FridgePage;
