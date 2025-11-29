const BASE_URL = "http://localhost:8080";

export async function getProducts() {
  return fetch(`${BASE_URL}/products`).then(res => res.json());
}

export async function createOrder(order) {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(order)
  }).then(res => res.json());
}

export async function getDelivery(id) {
  return fetch(`${BASE_URL}/delivery/${id}`).then(res => res.json());
}
export async function createDelivery(delivery) {
  return fetch(`${BASE_URL}/delivery`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(delivery),
  }).then(res => res.json());
}
