import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    let abort = false;
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!abort) setProduct(data);
      })
      .catch((err) => {
        if (!abort) setError(err.message || "Error fetching product");
      })
      .finally(() => {
        if (!abort) setLoading(false);
      });
    return () => {
      abort = true;
    };
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  const imageUrl = product.images && product.images.length ? product.images[0] : "";

  return (
    <section className="single-product">
      {imageUrl ? (
        <img className="single-product-image" src={imageUrl} alt={product.title} />
      ) : (
        <div className="single-product-image placeholder">No image</div>
      )}
      <div className="single-product-body">
        <h2 className="single-product-title">{product.title}</h2>
        <p className="single-product-price">${product.price}</p>
        <p className="single-product-description">{product.description}</p>
      </div>
    </section>
  );
}

export default SingleProduct;