import ProductList from "./components/ProductList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/ducks/products";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div> {products && <ProductList products={products} />} </div>;
}

export default App;
