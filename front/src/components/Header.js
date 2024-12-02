import React, { useEffect, useState } from "react";
import "../styles/Header.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  let [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = orders.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(price);
  }, [orders]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Zluxfurs</h1>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#profile">Profile</a>
            </li>
          </ul>
        </nav>

        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <>
                {orders.map((el) => (
                  <Order onDelete={onDelete} key={el.id} item={el} />
                ))}
                <p className="total-price">Total price: {totalPrice} $</p>
              </>
            ) : (
              <p>Корзина пуста</p>
            )}
          </div>
        )}

        <div className="button-container">
          <button className="order-button">
            Make an Order <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}
