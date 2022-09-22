import React from "react";
import Card from "./Card";
import data from "./data";
import Cart from "./Cart";
import Header from "./Header";

export default function App() {
  const [prod, setProd] = React.useState(data);
  const [cartItems, setCartItems] = React.useState(() => JSON.parse(localStorage.getItem("cartItems") || []));
  const [darkMode, setDarkMode] = React.useState(false);

  //Add item to cart
  function addToCart(id) {
    setProd((item) => {
      const product = [];
      for (let i = 0; i < item.length; i++) {
        let currentProd = item[i];
        if (currentProd.id === id) {
          let updatedProd = {
            ...currentProd,
            quantity: currentProd.quantity + 1,
          };
          product.push(updatedProd);
          const prodExists = cartItems.some(
            (item) => item.id === currentProd.id
          );
          if (prodExists) {
            setCartItems((oldProd) =>
              oldProd.map((item) => {
                return item.id === id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item;
              })
            );
          } else {
            setCartItems((oldProds) => {
              return [...oldProds, updatedProd];
            });
          }
        } else {
          product.push(currentProd);
        }
      }
      return product;
    });
  }

  console.log(cartItems);

  //creates card
  const products = data.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        prodName={item.prodName}
        image={item.image}
        category={item.category}
        price={item.price}
        fav={item.fav}
        addToCart={() => addToCart(item.id)}
        darkStatus={darkMode}
      />
    );
  });

  //Increases item count in cart
  function increaseCount(id) {
    setCartItems((oldItems) =>
      oldItems.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  }

  //Decreases item count in cart
  function decreaseCount(id) {
    setCartItems((oldItems) =>
      oldItems.map((item) => {
        if (item.quantity > 1) {
          return item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        } else {
          return item.id === id ? { ...item, quantity: item.quantity } : item;
        }
      })
    );
  }

  //cart items
  const itemsInCart = cartItems.map((item) => {
    return (
      <Cart
        key={item.id}
        id={item.id}
        prodName={item.prodName}
        image={item.image}
        category={item.category}
        price={item.price}
        quantity={item.quantity}
        fav={item.fav}
        increaseCount={() => increaseCount(item.id)}
        decreaseCount={() => decreaseCount(item.id)}
        darkStatus={darkMode}
      />
    );
  });

  //opens cart
  function handleCatOpen() {
    const cart = document.querySelector(".cartItemsContainer");
    cart.classList.toggle("active");
  }

  //Dark mode overAll
  function handleDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }

  //Body dark mode
  React.useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = darkMode ? "#000007" : "";
  }, [handleDarkMode]);

  //dark mode cartItems
  const styleCartItem = {
    backgroundColor: darkMode ? "#00000b" : "",
  };

  const styleCartTitle = {
    color: darkMode ? "#f1f1f1" : "#202124"
  }

  //Store items in cart into localStorage
  React.useEffect(() =>{
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  },[cartItems])

  return (
    <>
      <Header
        inCart={cartItems.length > 0 ? cartItems.length : 0}
        handleCatOpen={handleCatOpen}
        handleDarkMode={handleDarkMode}
        darkStatus={darkMode}
      />
      <div style={styleCartItem} className="cartItemsContainer">
      <h3 style={styleCartTitle}>My cart</h3>
        {itemsInCart}
      </div>
      <div className="prodContainer">{products}</div>
    </>
  );
}
