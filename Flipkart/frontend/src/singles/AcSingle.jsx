import React, { useState } from "react";
import { acData } from "../stores/data/ac";
import { useParams } from "react-router-dom";

import { useCart } from "../stores/context/CartContext";
import { useWishlist } from "../stores/contextwish/WishContext";
import NavBar from "../stores/Components/NavBar";

const AcSingle = () => {
  const { id } = useParams();
  const { addToWishlist, wishItems } = useWishlist();

  const product = acData.find((item) => item.id === id);

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
            <h2>{product.company}</h2>
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

export default AcSingle;

// import React from "react";
// import { mobileData } from "../stores/data/mobiles";
// import { useParams } from "react-router-dom";
// import NavBar from "../stores/Components/NavBar";
// import { useCart } from "../stores/context/CartContext";
// {isWishlistItem ? (
//   <button onClick={() => removeFromWishlist(product)}>
//     Remove from Wishlist
//   </button>
// ) : (
//   <button onClick={() => addToWishlist(product)}>
//     Add to Wishlist
//   </button>
// )}
// const MobileSingle = () => {
//   const { id } = useParams();

//   const product = mobileData.find((item) => item.id === id);

//   const { addToCart, cartItems } = useCart();

//   return (
//     <>
//       <NavBar />
//       <div className="ind-page">
//         <div className="ind-image">
//           <img src={product.image} alt="" />
//         </div>
//         <div className="ind-details space">
//           <div className="ind-company">
//             <h2>{product.company}</h2>
//           </div>
//           <div className="ind-model space">
//             <h3>{product.model}</h3>
//           </div>
//           <div className="ind-price space">
//             <h2>{product.price}</h2>
//           </div>
//           <div className="ind-desc space">
//             <p>{product.description}</p>
//           </div>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileSingle;
// /*  import React from "react";
// import { mobileData } from "../data/mobiles";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";

// import { useCart } from "../context/CartContext";

// const MobileSingle = () => {
//   const { id } = useParams();

//   const {addToCart, cartItems} = useCart()

//   const product = mobileData.find((item) => item.id === id);

//   return (
//     <>
//       <Navbar />
//       <div className="ind-section">
//         <div className="ind-image">
//           <img src={product.image} alt="" />
//         </div>
//         <div className="ind-details space">
//           <div className="ind-company">
//             <h2>{product.company}</h2>
//           </div>
//           <div className="ind-model space">
//             <h3>{product.model}</h3>
//           </div>
//           <div className="ind-price space">
//             <h2>{product.price}</h2>
//           </div>
//           <div className="ind-desc space">
//             <p>{product.description}</p>
//           </div>
//           <button onClick={()=>addToCart(product)}>Add to Cart</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileSingle; */
