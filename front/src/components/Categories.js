import React, { useState } from "react";
import "../styles/Categories.css";

function Categories({ chooseCategory }) {
  const [categories] = useState([
    {
      key: "Все",
      name: "Все",
    },
    {
      key: "Соболь",
      name: "Соболь",
    },
    {
      key: "Шиншилла",
      name: "Шиншилла",
    },
    {
      key: "Рысь",
      name: "Рысь",
    },
  ]);

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
