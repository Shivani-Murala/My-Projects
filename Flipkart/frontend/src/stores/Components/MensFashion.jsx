import React from "react";
import { menData } from "../data/men";

const MensFashion = () => {
  const firstfiveimages = menData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Mensfashion</h2>
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

export default MensFashion;
