import React from "react";
import Menu from "./Menu.js";

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
                image={menu.picture}
              ></Menu>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
