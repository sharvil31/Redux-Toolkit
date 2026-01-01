"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./Redux/slice";

const products = [
  {
    id: 1,
    name: "Red Sneakers",
    price: "$49.99",
    image:
      "https://imgs.search.brave.com/DLNwq3RjQTMSaGORg3QajmhwrX3YxkazbjFY7d-G3PM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yZWQt/c25lYWtlcnMtd2hp/dGUtbGFjZXMtY2Fz/dWFsLWZhc2hpb24t/Zm9vdHdlYXItdHdv/LWRpc3BsYXllZC1h/Z2FpbnN0LWJsdWUt/YmFja2dyb3VuZC1j/cmVhdGluZy1jbGVh/bi1tb2Rlcm4tbG9v/ay0zODA5MDk1MzUu/anBn",
    description: "Comfortable and stylish sneakers perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Blue Jacket",
    price: "$89.99",
    image:
      "https://imgs.search.brave.com/yitTAQe3BxRHpuWRM98bSE8EiAmv5KBSOzdZX3i2SxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDYv/ODEyLzE3OC9zbWFs/bC9jbG9zZS11cC1v/Zi1jbGFzc2ljLWRl/bmltLWphY2tldC1w/aG90by5qcGc",
    description: "Warm, durable, and fashionable jacket for all seasons.",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "$199.99",
    image:
      "https://imgs.search.brave.com/btzAWH11ZIVTIe7AHw59tLTc_WwHLm8NpUCMETA_7YA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3F1aWNr/cXVvdGVzL2xpc3Rp/Y2xlL2xpc3RpY2xl/XzE3NjM2MDgxMjg3/MThfNGpjYzdfMTY5/NHg4MDAuanBnP2lt/cG9saWN5PXF1ZXJ5/cGFyYW0maW09UmVz/aXplPSgzODQwLDI4/ODApLGFzcGVjdD1m/aXQmcT03NSZ3aWR0/aD0zODQw",
    description:
      "Track your fitness and notifications with this sleek smartwatch.",
  },
  {
    id: 4,
    name: "Backpack",
    price: "$59.99",
    image:
      "https://imgs.search.brave.com/jmJlM2GjAmrwwfMlsWxj-OLTMda8dxPuY-By5ouqPhs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/aWV3LTNkLXNjaG9v/bC1iYWNrcGFja18y/My0yMTUxMTAzNjQ0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA",
    description: "Spacious and sturdy backpack ideal for travel and daily use.",
  },
];

const Product = () => {
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <h2 className="card-description">{product.description}</h2>
              <p className="card-price">{product.price}</p>
              <button onClick={() => dispatch(addItem())} className="card-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
