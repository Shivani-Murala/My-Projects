import React from "react";
import { computerData } from "../data/computers";

const Computers = () => {
  const firstfiveimages = computerData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Computers</h2>
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

export default Computers;
