import React from "react";
import { furnitureData } from "../data/furniture";
const Furniture = () => {
  const firstfiveimages = furnitureData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Furnitures</h2>
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

export default Furniture;
