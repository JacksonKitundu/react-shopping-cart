import React from "react";

export default function Card(props) {
   function changeStyle() {
     let style
    if (props.darkStatus) {
      return style = {backgroundColor: "#00000b"}
    }else {
      return style = {
        backgroundColor:
          props.prodName === "hoodie purple"
            ? "#cfb6f6"
            : props.prodName === "shirt pink"
            ? "#fdebe9"
            : props.prodName === "short pink"
            ? "#fdebe9"
            : props.prodName === "pant purple"
            ? "#cfb6f6"
            : ""
      };
    }
  }

  const namePriceStyle = {
    color: props.darkStatus ? "#f1f1f1" : "",
  };

  return (
    <div className="card">
      <img style={changeStyle()} className="cardImg" src={props.image} alt="" />
      <div className="cardContent">
        <div style={namePriceStyle} className="namePrice">
          <h4>{props.price}</h4>
          <h5>{props.prodName}</h5>
        </div>
        <div className="btnAdd">
          <button onClick={props.addToCart}>+</button>
        </div>
      </div>
    </div>
  );
}
