import React from "react";

export default function Cart(props) {
  //darkMode
  const styleCartItem = {
    backgroundColor: props.darkStatus ? "#cfb6f636" : "",
    borderLeft: "3px solid #bbbbbb"
  }
  const styleCartBtn = {
    backgroundColor: props.darkStatus ? "#12082a" : "",
    color: "#bbbbbb"
  }

  return (
      <div style={styleCartItem} className="cartItem">
        <div className="imgDesc">
        <div className="img"><img src={props.image} alt="" /></div>
        <div className="desc">
          <div className="amount">
            <p>{props.prodName}</p>
            <p>{`${props.quantity}x`}</p>
            <p>{props.price}</p>
          </div>
        </div>
        </div>
        <div className="btnAdd">
          <button style={styleCartBtn} onClick={props.increaseCount} className="btnOne">+</button>
          <button style={styleCartBtn} onClick={props.decreaseCount} className="btnTwo">-</button>
        </div>
      </div>
  )
}