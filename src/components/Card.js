import React from "react";

export default function Card(props) {
   function changeStyle() {
     let style
    if (props.darkStatus) {
      return style = {backgroundColor: "#11131B"}
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

  const stylePrice = {
    color: props.darkStatus ? "#f1f1f1" : "#171717",
  };
  const styleTitle = {
    color: props.darkStatus ? "#f1f1f1" : "#040404",
  };

  return (
    <div className="card">
      <img style={changeStyle()} className="cardImg" src={props.image} alt="" />
      <div className="cardContent">
        <div className="namePrice">
          <h4 style={stylePrice}>Tsh {props.price}</h4>
          <p style={styleTitle}>{props.prodName}</p>
        </div>
        <div className="btnAdd">
          <button onClick={props.addToCart}>+</button>
        </div>
      </div>
    </div>
  );
}
