import React, { useState } from "react";
import { menData } from "../stores/data/men";
import { useParams } from "react-router-dom";

import { useCart } from "../stores/context/CartContext";
import { useWishlist } from "../stores/contextwish/WishContext";
import NavBar from "../stores/Components/NavBar";

const MensSingle = () => {
  const { id } = useParams();
  const { addToWishlist, wishItems } = useWishlist();

  const product = menData.find((item) => item.id === id);

  const { addToCart, cartItems } = useCart();

  return (
    <>
      <NavBar />
      <div className="ind-page">
        <div className="ind-image">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>

          <button
            className="link-style button-style"
            onClick={() => addToWishlist(product)}
          >
            ❤️
          </button>
        </div>
      </div>
    </>
  );
};

export default MensSingle;
