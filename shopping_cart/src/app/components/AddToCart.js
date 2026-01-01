"use client";

import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const selector = useSelector((state) => state.cart.value);

  console.log(selector);
  return (
    <div className="cart">
      <GrCart className="w-7 h-7" />
      <div className="cart-count">{selector}</div>
    </div>
  );
};

export default AddToCart;
