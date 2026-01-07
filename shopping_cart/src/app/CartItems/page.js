"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllItems,
  removeItem,
  setQuntity,
} from "../components/Redux/slice";
import { useRouter } from "next/navigation";

const CartItems = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const itemsSelector = useSelector((state) => state.cart.items);
  const [cartItems, setCartItems] = useState(itemsSelector);

  useEffect(() => {
    setCartItems(itemsSelector);
  }, [itemsSelector]);

  const handleQntyChange = (value, id) => {
    const quantity = Math.max(1, Number(value));

    const tempCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );

    dispatch(setQuntity({ id, quantity }));
    setCartItems(tempCartItems);
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    localStorage.clear();
    alert("Order placed!");
    dispatch(removeAllItems());
    router.push("/");
  };

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
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="card-btn remove"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="total-price">
          Total:{" "}
          <span className="text-emerald-700">${totalPrice.toFixed(2)}</span>
        </div>

        <button onClick={handlePlaceOrder} className="card-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartItems;
