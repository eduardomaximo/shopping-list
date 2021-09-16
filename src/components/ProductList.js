import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <div>
      <ul>
        {props.products.map((product) => {
          <Product
            name={product.name}
            price={product.price}
            fabricationDate={product.fabricationDate}
            expirationDate={product.expirationDate}
          />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
