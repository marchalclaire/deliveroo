import React from "react";

const Menu = props => {
  return (
    <>
      <div className="menu-slide">
        <div className="menu-text">
          <div className="text-1">{props.title}</div>
          <div className="text-2">{props.detail}</div>
          <div className="text-3">{props.price}€</div>
        </div>
        <img className="img-meal" src={props.image} alt={props.image}></img>
      </div>
    </>
  );
};

export default Menu;
