import React from "react";
import { speakerData } from "../data/speaker";

const Speaker = () => {
  const firstfiveimages = speakerData.slice(0, 5);
  return (
    <>
      <div className="proTitle">
        <h2>Speakers</h2>
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

export default Speaker;
