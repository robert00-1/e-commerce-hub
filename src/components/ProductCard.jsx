import React from "react";
import "../index.css";

function ProductCard({ product }) {
  return (
    <div className="coffee-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      <p className="price">{product.price}</p>
    </div>
  );
}

export default ProductCard;