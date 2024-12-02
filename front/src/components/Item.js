import React from "react";

export default function Item({ onShowItem, item, addToCart }) {
  return (
    <div className="product-card">
      <img
        src={"./images/" + item.image}
        alt={item.name}
        onClick={() => onShowItem(item)}
      />
      <h3 onClick={() => onShowItem()}>{item.name}</h3>
      <p>{item.description}</p>
      <b>{item.price} $</b>
      <div className="add-to-cart" onClick={() => addToCart(item)}>
        +
      </div>
    </div>
  );
}
