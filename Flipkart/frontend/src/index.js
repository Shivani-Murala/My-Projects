import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./stores/context/CartContext";
import { WishProvider } from "./stores/contextwish/WishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <WishProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishProvider>
    </React.StrictMode>
  </BrowserRouter>
);
