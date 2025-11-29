import React, { useState } from "react";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    manufacturer: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product added successfully!");
        window.location.href = "/products"; // redirect back
      })
      .catch(() => alert("Failed to add product"));
  };

  return (
    <div>
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" onChange={handleChange} />
        <input name="description" placeholder="Description" onChange={handleChange} />
        <input name="price" type="number" placeholder="Price" onChange={handleChange} />
        <input name="quantity" type="number" placeholder="Quantity" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="manufacturer" placeholder="Manufacturer" onChange={handleChange} />
        
        <button className="btn btn-primary" type="submit">Save Product</button>
      </form>
    </div>
  );
}
