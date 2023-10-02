import React from "react";
import Item from "./Item";
import "./ItemBody.css";
const ItemBody = ({ products, addItem, removeItem, addedItems }) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="item__body">
      {products.map((product) => (
        <Item
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default ItemBody;