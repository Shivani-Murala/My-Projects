import React from "react";
import { tvData } from "../data/tv";
const Tv = () => {
  const firstfiveimages = tvData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>TV's</h2>
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

export default Tv;
