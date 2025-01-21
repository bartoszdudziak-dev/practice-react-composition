import React from "react";

function Product({ product, isCategory, onClick, disabled = false }) {
  const { id, name, price } = product;

  const handleClick = () => {
    if (isCategory) {
      onClick({ id, name, price });
    } else {
      onClick(id);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <span>{price} PLN</span>
      <button onClick={handleClick} disabled={disabled}>
        {isCategory ? "Dodaj do koszyka" : "Usun z koszyka"}
      </button>
    </div>
  );
}

export default Product;
