import ProductList from "./components/ProductList";
import { useState, useEffect } from "react";
import { getProducts } from "./helpers/fetchAPI";

function App() {
  const [products, setProducts] = useState(null);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts([...response]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  return <div>{products && <ProductList products={products} />}</div>;
}

export default App;
