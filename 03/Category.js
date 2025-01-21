import React from "react";
import Product from "./Product";

function Category({ items, onAdd, isAdded }) {
  const categoryItemsList = items.map((item) => (
    <Product
      key={item.id}
      product={item}
      isCategory={true}
      onClick={onAdd}
      disabled={isAdded(item.id)}
    />
  ));

  return (
    <>
      <h2>Category</h2>
      {categoryItemsList}
    </>
  );
}

export default Category;
