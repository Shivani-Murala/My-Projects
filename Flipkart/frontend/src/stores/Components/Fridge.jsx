import React from "react";

import { fridgeData } from "../data/fridge";
const Fridge = () => {
  const firstfiveimages = fridgeData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Fridge</h2>
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

export default Fridge;
