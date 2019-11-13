import React from "react";
import Menu from "./Menu.js";
import defaultPic from "../images/defaultPic.jpg";

const MenuContainer = props => {
  return (
    <>
      <div className="menu">
        <div className="menu-title">{props.title}</div>
        <div className="menu-items">
          {props.menus.map(menu => {
            return (
              <Menu
                key={menu.id}
                title={menu.title}
                detail={menu.description}
                price={menu.price}
                popular={menu.popular === true ? " ⭐︎ Populaire" : ""}
                image={menu.picture ? menu.picture : defaultPic}
                // dans le parent app.js, on ajoute dans la section menuContainer de App, une fonction (on enrichi l'objet d'une fonction callback)
                onClickCallback={menu.addToCart}
              ></Menu>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
