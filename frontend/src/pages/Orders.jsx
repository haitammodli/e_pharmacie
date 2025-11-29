import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/orders")
      .then(res => res.json())
      .then(data => {
        setOrders(data);   // order-service returns normal JSON
      })
      .catch(() => setOrders([]));
  }, []);

  return (
    <div>
      <h2>Orders List</h2>

      {/* CREATE ORDER BUTTON */}
      <Link to="/add-order">
        <button className="btn btn-primary" style={{ marginBottom: "20px" }}>
          ➕ Create New Order
        </button>
      </Link>

      {orders.length === 0 ? (
        <p>No orders available</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Order #{order.id}</strong> — {order.customerName} ({order.customerEmail})
              <br />
              Total: {order.totalPrice} MAD
              <br />
              Status: {order.status}
              <br />
              <small>Items: {order.items.length}</small>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
