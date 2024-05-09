import React from "react";
import { acData } from "../data/ac";

const AirConditon = () => {
  const firstfiveimages = acData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>AC</h2>
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

export default AirConditon;
