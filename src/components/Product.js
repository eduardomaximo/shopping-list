import React from "react";

const Product = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.fabricationDate}</p>
      <p>{props.expirationDate}</p>
    </li>
  );
};

export default Product;
