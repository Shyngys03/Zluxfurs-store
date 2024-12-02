import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={"./images/" + item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <b>{item.price} $</b>
      <FaTrash className="delete-icon" onClick={() => onDelete(item.id)} />
    </div>
  );
}
