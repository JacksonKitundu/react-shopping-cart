import React from "react";
// import hoodie from "../images/hoodie1.png"

export default function Card(props) {

  const style = {
    backgroundColor: props.prodName === "hoodie purple" ? "#cfb6f6" 
    : props.prodName === "shirt pink" ? "#fdebe9"
    : props.prodName === "short pink" ? "#fdebe9"
    : props.prodName === "pant purple" ? "#cfb6f6" : ""
  }
  
  return (
    <div className="card">
      <img style={style} className="cardImg" src={props.image} alt="" />
      <div className="cardContent">
        <div className="namePrice">
        <h4>{props.price}</h4>
        <h5>{props.prodName}</h5>
        </div>
        <div className="btnAdd">
          <button onClick={props.addToCart}>+</button>
        </div>
      </div>
    </div>
  )
}