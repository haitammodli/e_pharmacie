import { useState } from "react";
import { createDelivery, getDelivery } from "../api/api";

export default function Delivery() {
  // For creating new delivery
  const [newDelivery, setNewDelivery] = useState({
    orderId: "",
    address: ""
  });

  // For searching delivery
  const [searchId, setSearchId] = useState("");
  const [deliveryResult, setDeliveryResult] = useState(null);

  const handleCreate = async (e) => {
    e.preventDefault();

    const res = await createDelivery(newDelivery);
    alert("Delivery created! ID: " + res.id);
    setNewDelivery({ orderId: "", address: "" });
  };

  const handleSearch = async () => {
    const res = await getDelivery(searchId);
    setDeliveryResult(res);
  };

  return (
    <div className="container">

      {/* CREATE DELIVERY */}
      <h2>Create Delivery</h2>

      <form onSubmit={handleCreate}>
        <input
          placeholder="Order ID"
          type="number"
          value={newDelivery.orderId}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, orderId: e.target.value })
          }
        />

        <input
          placeholder="Address"
          value={newDelivery.address}
          onChange={(e) =>
            setNewDelivery({ ...newDelivery, address: e.target.value })
          }
        />

        <button className="btn btn-primary">Create Delivery</button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      {/* TRACK DELIVERY */}
      <h2>Track Delivery</h2>

      <input
        placeholder="Delivery ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />

      <button className="btn btn-primary" style={{ marginTop: 10 }} onClick={handleSearch}>
        Search
      </button>

      {deliveryResult && (
        <div className="card">
          <p><b>Status:</b> {deliveryResult.status}</p>
          <p><b>Latitude:</b> {deliveryResult.latitude}</p>
          <p><b>Longitude:</b> {deliveryResult.longitude}</p>
          <p><b>ETA:</b> {deliveryResult.estimatedTime}</p>
        </div>
      )}
    </div>
  );
}
