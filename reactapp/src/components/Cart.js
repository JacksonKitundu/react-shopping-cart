import React from "react";

export default function Cart(props) {
  //darkMode
  const styleCartItem = {
    backgroundColor: props.darkStatus ? "#cfb6f636" : "",
    borderLeft: props.darkStatus ? "3px solid #bbbbbb" : "3px solid #ffffff"
  }
  const styleCartBtn = {
    backgroundColor: props.darkStatus ? "#12082a" : "#ffffff",
    color: props.darkStatus ? "#bbbbbb" : "#040404"
  }
  const styleFont1 = {
    color: props.darkStatus ? "#f1f1f1" : "#040404"
  }
  const styleFont2 = {
    color: props.darkStatus ? "#eaeaea" : "#040404"
  }

  return (
      <div style={styleCartItem} className="cartItem">
        <div className="imgDesc">
        <div className="img"><img src={props.image} alt="" /></div>
        <div className="desc">
          <div className="amount">
            <p style={styleFont1} className="prodName">{props.prodName}</p>
            <p style={styleFont2} className="ProdQtt">{`${props.quantity}x`}</p>
            <p style={styleFont2} className="prodPrice">{props.price}</p>
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