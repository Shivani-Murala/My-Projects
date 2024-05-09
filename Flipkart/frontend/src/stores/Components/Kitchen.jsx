import React from "react";
import { kitchenData } from "../data/kitchen";
const Kitchen = () => {
  const firstfiveimages = kitchenData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Kitchen</h2>
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

export default Kitchen;
