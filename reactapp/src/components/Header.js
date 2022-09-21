import React from "react";

export default function Header(props) {
  const darkStyleHeader = {
    backgroundColor: props.darkStatus ? "#030120" : ""
  }
  return (
    <header style={darkStyleHeader}>
      <i onClick={props.handleDarkMode} class="fa fa-moon-o" aria-hidden="true"></i>
      <div className="cartNotification">
        <div onClick={props.handleCatOpen} className="cart">
          <i class="fa-solid fa-cart-shopping"></i> 
          <div className="notCount">{props.inCart}</div>
        </div>
      </div>
    </header>
    )
}