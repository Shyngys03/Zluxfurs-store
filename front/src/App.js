import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProductsList } from "./db/data";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import Home from "./components/Home";

function App() {
  const [items] = useState(ProductsList);
  const [cart, setCart] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState([]);

  const addToCart = (item) => {
    let isInCart = false;
    cart.forEach((el) => {
      if (el.id === item.id) isInCart = true;
    });
    if (!isInCart) setCart((prevCart) => [...prevCart, item]);
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((el) => el.id !== id));
  };

  const chooseCategory = (category) => {
    if (category !== "Все")
      setCurrentItems(ProductsList.filter((el) => el.category === category));
    else setCurrentItems(ProductsList);
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={cart} onDelete={deleteFromCart} />

      
      {/* <Home /> */}

      <Categories chooseCategory={chooseCategory} />

      <Items
        onShowItem={onShowItem}
        items={currentItems}
        addToCart={addToCart}
      />

      {showFullItem && (
        <ShowFullItem
          item={fullItem}
          onShowItem={onShowItem}
          addToCart={addToCart}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
