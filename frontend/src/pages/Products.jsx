import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => {
        if (data._embedded && data._embedded.products) {
          setProducts(data._embedded.products);
        } else {
          console.error("Unexpected Spring Data REST format:", data);
          setProducts([]);
        }
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div>
      <h2>Products List</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
             {products.map((p) => {
             const id = p._links.self.href.split("/").pop(); // extract the ID
           return (
         <li key={id}>
             {p.name} — {p.price} MAD
         </li>
           );
         })}
        </ul>
      )}
    </div>
  );
}

export default Products;
