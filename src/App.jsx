import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import AddProducts from "./components/addproducts/AddProducts";
import ItemBody from "./components/item/ItemBody";
import ProductsPage from './ProductsPage'
import Button from "./components/button/Button";
import Navbar from './Navbar';
import "./App.css";

const App = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [cart, setCart] = useState([]);
  console.log(cart);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setItem(data));
    console.count("hi");
  }, []);


  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }
  const itemsFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }
  // console.log(addedItems);
  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
    // console.log(addedItems);
  }
  return (
    <div>
      {/* <Header /> */}
      <div className="body__container">
        <div className="nav">
          <Header />
          <div className="nav-right">
          <Navbar cart={cart} setCart={setCart}/>
          <ProductsPage cart={cart} setCart={setCart}/>
            <Button num={addedItems.length} click={setShowAddProducts} />
          </div>
        </div>

        {showAddProducts && (
          <AddProducts
            click={setShowAddProducts}
            items={addedItems}
            removeItem={removeItem}
            setAddedItem={setAddedItem}
          />
        )}
        <ItemBody
          products={itemsFilter}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      </div>
    </div>
  );
};

export default App;
