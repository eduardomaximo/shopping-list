import React from "react";

const Product = (props) => {
  return (
    <li>
      <p>{props.name}</p>
      <p>R$: {props.price}</p>
      <p>Data de Fabricação: {props.fabricationDate}</p>
      <p>{props.expirationDate}</p>
    </li>
  );
};

export default Product;
