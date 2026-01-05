"use client";

import React from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const itemsSelector = useSelector((state) => state.cart.items);

  console.log(itemsSelector);
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Cart Items</h1>
        <p>
          <span className="font-semibold text-xl">{itemsSelector.length}</span>{" "}
          Items
        </p>
      </div>

      <div>
        {itemsSelector.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>{item.brand}</p>
              </div>
            </div>

            <div className="item-actions">
              <span className="price">{item.price}</span>
              <button className="card-btn remove">Remove</button>
            </div>
          </div>
        ))}

        <div className="total-price">
          Total: <span className="text-emerald-700">{itemsSelector.reduce((sum, curr) => sum + curr.price, 0)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
