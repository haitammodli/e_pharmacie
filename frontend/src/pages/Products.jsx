import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => {
        if (data._embedded && data._embedded.products) {
          setProducts(data._embedded.products);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <div>
      <h2>Products List</h2>

      {/* ADD PRODUCT BUTTON */}
      <Link to="/add-product">
        <button className="btn btn-primary" style={{ marginBottom: "20px" }}>
          ➕ Add New Product
        </button>
      </Link>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((p) => {
            const id = p._links.self.href.split("/").pop();
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
import { useState, useEffect } from "react";