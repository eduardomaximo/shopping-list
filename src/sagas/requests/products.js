const url = "http://localhost:8000";

/* export function requestGetProducts() {
  return axios.request({
    method: "get",
    url: "http://localhost:8000/products",
  });
} */

export async function requestGetProducts() {
  const response = await fetch(url + "/products");
  const json = await response.json();
  return json;
}
