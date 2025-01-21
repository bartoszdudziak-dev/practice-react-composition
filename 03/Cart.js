import React from "react";
import Product from "./Product";

function Cart({ items, onRemove }) {
  const cartItemsList = items.map((item) => (
    <Product
      key={item.id}
      product={item}
      isCategory={false}
      onClick={onRemove}
    />
  ));

  return (
    <>
      <h2>Cart</h2>
      {cartItemsList}
    </>
  );
}

export default Cart;
