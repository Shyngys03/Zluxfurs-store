import React from "react";
import Item from "./Item";
import "../styles/Items.css";

export default function Items({ onShowItem, items, addToCart }) {
  return (
    <main>
      {items.map((product) => (
        <Item
          onShowItem={onShowItem}
          key={product.id}
          item={product}
          addToCart={addToCart}
        />
      ))}
    </main>
  );
}
