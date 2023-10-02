import React from 'react';
import AddProducts from './components/AddProducts/AddProducts';
import Header from './components/Header/Header';

const Products = ({cartItems, allProductsData, addToCart}) => {
  return (
    <>
  <Header cartItems={cartItems}/>
  <AddProducts allProductsData={allProductsData} addToCart={addToCart} />
    </>
  )
}

export default Products;