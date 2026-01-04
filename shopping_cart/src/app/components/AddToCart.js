"use client";

import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  console.log(cartSelector);
  return (
    <div className="cart">
      <GrCart className="w-7 h-7" />
      <div className="cart-count">{cartSelector.length}</div>
    </div>
  );
};

export default AddToCart;
