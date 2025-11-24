import { useState } from "react";
import { createOrder } from "../api/api";

export default function CreateOrder() {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    productId: "",
    quantity: 1
  });

  const submit = async () => {
    const order = {
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      items: [
        {
          productId: parseInt(form.productId),
          quantity: parseInt(form.quantity)
        }
      ]
    };

    const res = await createOrder(order);
    alert("Order Created with ID: " + res.id);
  };

  return (
    <div style={{padding: 20}}>
      <h2>Create Order</h2>

      <input
        placeholder="Name"
        value={form.customerName}
        onChange={e => setForm({...form, customerName: e.target.value})}
      /><br /><br />

      <input
        placeholder="Email"
        value={form.customerEmail}
        onChange={e => setForm({...form, customerEmail: e.target.value})}
      /><br /><br />

      <input
        placeholder="Product ID"
        value={form.productId}
        onChange={e => setForm({...form, productId: e.target.value})}
      /><br /><br />

      <input
        type="number"
        placeholder="Quantity"
        value={form.quantity}
        onChange={e => setForm({...form, quantity: e.target.value})}
      /><br /><br />

      <button onClick={submit}>Submit Order</button>
    </div>
  );
}
