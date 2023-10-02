import React, {useEffect} from "react";
import "./Item.css";
import {AddRemoveBtn} from "../addremoveBtn/AddRemoveBtn";
import {useState} from "react";
const Item = ({ product, addItem, removeItem, addedItems }) => {
  const [isAdded, setIsAdded] = useState(true);
  const item = addedItems.filter((addedItem) => addedItem.id == product.id);
  useEffect(() => {
    item.length == 0 ? setIsAdded(true) : setIsAdded(false);
  }, [item]);

  console.log(item);
  return (
    <div className="item">
      <img className="item__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="item-price-add">
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "ADD " : "REMOVE"}
        </button>
      </div>
    </div>
  );
};

export default Item;