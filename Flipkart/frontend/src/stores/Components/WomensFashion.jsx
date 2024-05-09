import React from "react";
import { womanData } from "../data/woman";
const WomensFashion = () => {
  const firstfiveimages = womanData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>WomensFashion</h2>
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

export default WomensFashion;
