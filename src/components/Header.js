import React from "react";

const Header = props => {
  return (
    <>
      <div className="container-nav">
        <div className="text-nav">
          <div className="header-title">{props.title}</div>
          <div className="header-text">{props.text}</div>
        </div>
        <img className="img-nav" src={props.img}></img>
      </div>
    </>
  );
};

export default Header;
