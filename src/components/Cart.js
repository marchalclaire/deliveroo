import React from "react";
import Item from "./Item.js";

const Cart = props => {
  return (
    <>
      <div className="item-slide">
        <div className="button-basket full">Valider mon panier</div>
        <div className="text-basket-empty">Votre panier est vide</div>
        {props.items.map((item, index) => {
          return (
            <Item
              key={"cartItem" + index}
              name={item.title}
              price={item.price}
            ></Item>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
