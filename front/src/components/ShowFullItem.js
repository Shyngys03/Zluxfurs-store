import React from "react";
import "../styles/FullItem.css";

// function ShowFullItem({ item, onShowItem, addToCart }) {
//   return (
//     <div className="full-item">
//       <img
//         src={"./images/" + item.image}
//         alt={item.name}
//         onClick={() => onShowItem(item)}
//       />
//       <h3 onClick={() => onShowItem(item)}>{item.name}</h3>
//       <p>{item.description}</p>
//       <b>{item.price} $</b>
//       <div className="add-to-cart" onClick={() => addToCart(item)}>
//         +
//       </div>
//     </div>
//   );
// }

function ShowFullItem({ item, onShowItem, addToCart }) {
  return (
    <div className="full-item-backdrop" onClick={() => onShowItem(null)}>
      <div className="full-item" onClick={(e) => e.stopPropagation()}>
        <div className="close-button" onClick={() => onShowItem(null)}>
          ×
        </div>
        <img
          src={"./images/" + item.image}
          alt={item.name}
          onClick={() => onShowItem(item)}
        />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <b>{item.price} $</b>
        <div className="add-to-cart" onClick={() => addToCart(item)}>
          +
        </div>
      </div>
    </div>
  );
}

export default ShowFullItem;
