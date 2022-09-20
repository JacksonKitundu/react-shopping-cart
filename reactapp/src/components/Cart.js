import React from "react";

export default function Cart(props) {
  return (
      <div className="cartItem">
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
          <button onClick={props.increaseCount} className="btnOne">+</button>
          <button onClick={props.decreaseCount} className="btnTwo">-</button>
        </div>
      </div>
  )
}