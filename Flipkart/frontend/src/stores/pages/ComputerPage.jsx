import React, { useState } from "react";
import { computerData } from "../data/computers";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
const ComputerPage = () => {
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
      ? computerData
      : computerData.filter((orange) =>
          selectedproduct.includes(orange.company)
        );
  return (
    <>
      <NavBar />
      <div className="full-page">
        <div className="pro-selected">
          {computerData.map((phone) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedproduct.includes(phone.company)}
                    onChange={() => companyHandler(phone.company)}
                  />
                  {phone.company}
                </label>
              </div>
            );
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/computer/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} />
                  </div>
                </Link>
                <div className="proModel">
                  {item.company},{item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ComputerPage;
