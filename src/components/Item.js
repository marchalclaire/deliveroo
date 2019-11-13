import React from "react";

const Item = props => {
  return (
    <>
      <div className="item">
        <span className="text-4">{props.name}</span>
        <span className="text-4">{props.price} €</span>
      </div>
    </>
  );
};

export default Item;
