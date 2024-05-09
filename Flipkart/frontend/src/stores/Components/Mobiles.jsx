import React from "react";
import { mobileData } from "../data/mobiles";

const Mobiles = () => {
  const firstfiveimages = mobileData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Mobiles</h2>
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

export default Mobiles;
