import React, { useState, useEffect } from "react";
import GridContainer from "../components/GridContainer/GridContainer";
import ProductCard from "../components/ProductCard/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let abort = false;
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!abort) setProducts(data.products || []);
      })
      .catch((err) => {
        if (!abort) setError(err.message || "Error fetching products");
      })
      .finally(() => {
        if (!abort) setLoading(false);
      });
    return () => {
      abort = true;
    };
  }, []);

    if (loading)
        return <p>Loading products...</p>;
    if (error)
        return <p>Error: {error}</p>;

  return (
    <>
      <h2>Products</h2>
      <GridContainer>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            title={p.title}
            price={p.price}
            description={p.description}
            images={p.images}
          />
        ))}
      </GridContainer>
    </>
  );
}

export default Products;