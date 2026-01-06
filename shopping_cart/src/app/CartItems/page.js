"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const CartItems = () => {
  const itemsSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(
    itemsSelector.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }))
  );

  const handleQntyChange = (value, id) => {
    const quantity = Math.max(1, Number(value));

    const tempCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    setCartItems(tempCartItems);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Cart Items</h1>
        <p>
          <span className="font-semibold text-xl">{cartItems.length}</span>{" "}
          Items
        </p>
      </div>

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <img src={item.thumbnail} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>{item.brand}</p>
              </div>
            </div>

            <div className="item-actions">
              <div className="actions-wrapper">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQntyChange(e.target.value, item.id)}
                  className="qnty-input"
                  placeholder="Enter Quantity"
                />
                <div className="flex flex-col">
                  <span className="price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button className="card-btn remove">Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="total-price">
          Total:{" "}
          <span className="text-emerald-700">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
