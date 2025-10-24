import React from "react";
import "./ProductCard.css";

function ProductCard({ title, price, description, images }) {
  const imageUrl = images && images.length ? images[0] : "";
  return (
    <article className="product-card">
      {imageUrl ? (
        <img className="product-image" src={imageUrl} alt={title} />
      ) : (
        <div className="product-image placeholder">No image</div>
      )}
      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </article>
  );
}

export default ProductCard;