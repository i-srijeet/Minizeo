const BASE_URL = "https://dummyjson.com/products";

export async function getProducts() {
  const res = await fetch(BASE_URL);
  const data = await res.json();
  return data.products;
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
}