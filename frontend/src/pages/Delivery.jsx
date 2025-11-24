import { useState } from "react";
import { getDelivery } from "../api/api";

export default function Delivery() {
  const [id, setId] = useState("");
  const [delivery, setDelivery] = useState(null);

  const search = async () => {
    const res = await getDelivery(id);
    setDelivery(res);
  };

  return (
    <div style={{padding: 20}}>
      <h2>Track Delivery</h2>

      <input
        placeholder="Delivery ID"
        value={id}
        onChange={e => setId(e.target.value)}
      />
      <button onClick={search}>Search</button>

      {delivery && (
        <div style={{marginTop: 20}}>
          <p><b>Status:</b> {delivery.status}</p>
          <p><b>Lat:</b> {delivery.latitude}</p>
          <p><b>Lon:</b> {delivery.longitude}</p>
          <p><b>ETA:</b> {delivery.estimatedTime}</p>
        </div>
      )}
    </div>
  );
}
