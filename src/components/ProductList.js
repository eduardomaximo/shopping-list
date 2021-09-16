import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  return (
    <div>
      <ul>
        {props.products.map((product) => {
          return (
            <div key={product.id}>
              <Product
                name={product.name}
                price={product.price}
                fabricationDate={product.fabricationDate}
                expirationDate={product.expirationDate}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
