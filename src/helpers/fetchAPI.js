const url = "http://localhost:8000";

export async function getProducts() {
  const response = await fetch(url + "/products");
  const json = await response.json();
  return json;
}
