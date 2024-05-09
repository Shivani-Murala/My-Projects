// WhisCart.js
import React from "react";
import { useWishlist } from "./contextwish/WishContext";
import NavBar from "./Components/NavBar";

const WhisCart = () => {
  const { wishItems, removeFromWishlist } = useWishlist();

  return (
    <>
      <NavBar />
      <div>
        <h2 className="y-cart">Your Wishlist</h2>
        {wishItems.length === 0 ? (
          <p className="empty">Your Wishlist is Empty</p>
        ) : (
          <div>
            {wishItems.map((item) => {
              return (
                <div className="cart-section">
                  <div className="cart-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                  </div>
                  <button
                    className="removeBtn"
                    onClick={() => removeFromWishlist(item)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WhisCart;
