import React from "react";

export default function Header(props) {
  const darkStyleHeader = {
    backgroundColor: props.darkStatus ? "#11131B" : "",
    color : props.darkStatus ? "#f1f1f1" : ""
  }
  const cartStyle = {
    color: props.darkStatus ? "#f1f1f1" : ""
  }
  return (
    <header style={darkStyleHeader}>
      <i onClick={props.handleDarkMode} class="fa fa-moon-o" aria-hidden="true"></i>
      <div className="cartNotification">
        <div onClick={props.handleCatOpen} className="cart">
          <i class="fa-solid fa-cart-shopping"></i> 
          <div style={cartStyle} className="notCount">{props.inCart}</div>
        </div>
      </div>
    </header>
    )
}