"use client"

// Header.jsx
import React from "react";
import AddToCart from "./AddToCart";

const Header = () => {

  return (
    <header className="header">
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
        </ul>
      </nav>

      <AddToCart />
    </header>
  );
};

export default Header;
