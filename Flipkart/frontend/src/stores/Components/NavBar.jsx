import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const NavBar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className="navbar-section">
        <div className="title">
          <h2>Flipkart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <Link to="/signin" className="menu-link">
            <div className="user-detail">Signin/Signup</div>
          </Link>
          <Link to="/whislist" className="menu-link">
            <div className="wishlist-link">❤️</div>
          </Link>
          <Link to="/cart" className="menu-link">
            <div className="cart">
              Cart :<span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="sub-menu">
        <ul>
          <Link to="/mobile" className="menu-link">
            <li>Mobiles</li>
          </Link>
          <Link to="/computer" className="menu-link">
            <li>Computers</li>
          </Link>
          <Link to="/furniture" className="menu-link">
            <li>Furnitures</li>
          </Link>
          <Link to="/watch" className="menu-link">
            <li>Watches</li>
          </Link>
          <Link to="/mens" className="menu-link">
            <li>Mens Fashion</li>
          </Link>
          <Link to="/women" className="menu-link">
            <li>Womesfashion</li>
          </Link>
          <Link to="/ac" className="menu-link">
            <li>AC</li>
          </Link>
          <Link to="/books" className="menu-link">
            <li>Books</li>
          </Link>
          <Link to="/kitchen" className="menu-link">
            <li>Kitchen</li>
          </Link>
          <Link to="/fridge" className="menu-link">
            <li>Fridge</li>
          </Link>
          <Link to="/tv" className="menu-link">
            <li>Tv's</li>
          </Link>
          <Link to="/speaker" className="menu-link">
            <li>Speakers</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;

// import React from "react";
// import "./NavBar.css";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <>
//       <div className="navbar-section">
//         <div className="title">
//           <h2>Flipkart</h2>
//         </div>
//         <div className="search">
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div className="user">
//           <div className="userdetail">Signin/Signup</div>
//           <Link to="/cart">
//             <div className="cart">Cart</div>
//           </Link>
//         </div>
//       </div>
//       <div className="sub-menu">
//         <ul>
//           <Link to="/mobile">
//             <li>Mobiles</li>
//           </Link>
//           <Link to="/computer">
//             <li>Computers</li>
//           </Link>
//           <Link to="/furniture">
//             <li>Furnitures</li>
//           </Link>
//           <Link to="/watch">
//             <li>Watches</li>
//           </Link>
//           <Link to="/mens">
//             <li>Mens Fashion</li>
//           </Link>
//           <Link to="/women">
//             <li>Womesfashion</li>
//           </Link>
//           <Link to="/ac">
//             <li>AC</li>
//           </Link>
//           <Link to="/books">
//             <li>Books</li>
//           </Link>
//           <li>Kitchen</li>
//           <li>Fridge</li>
//           <li>Tv</li>
//           <li>Speakers</li>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default NavBar;
