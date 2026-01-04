"use client";

// Header.jsx
import React from "react";
import AddToCart from "./AddToCart";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyShop</div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Link href="/CartItems">
        <AddToCart />
      </Link>
    </header>
  );
};

export default Header;
