"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeAllItems, removeItem } from "./Redux/slice";
import { fetchProducts } from "./Redux/productSlice";


const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  return (
    <div className="page">
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold tracking-tight text-gray-800">
      Products
    </h1>
    <button
      onClick={() => dispatch(removeAllItems())}
      className="card-btn remove"
    >
      Clear Cart
    </button>
  </div>

  <div className="product-grid">
    {productSelector?.map((product) => (
      <div key={product.id} className="card">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img"
          />
          <span className="rating-badge">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="card-body">
          <div>
            <h2 className="card-title">{product.title}</h2>
            <p className="card-brand">{product.brand}</p>
            <p className="card-description line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="mt-4">
            <p className="card-price">${product.price}</p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => dispatch(addItem())}
                className="card-btn flex-1"
              >
                Add to Cart
              </button>
              <button
                onClick={() => dispatch(removeItem())}
                className="card-btn remove flex-1"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Product;
