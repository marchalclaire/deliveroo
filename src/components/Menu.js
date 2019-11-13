import React from "react";

const Menu = props => {
  return (
    <>
      <div className="menu-slide" onClick={props.onClickCallback}>
        <div className="menu-text">
          <div className="text-1">{props.title}</div>
          <div className="text-2">{props.detail}</div>
          <span className="text-3">{props.price}€</span>
          <span className="text-5">{props.popular}</span>
        </div>

        <img className="img-meal" src={props.image} alt={props.image}></img>
      </div>
    </>
  );
};

export default Menu;
