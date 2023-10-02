import {useState} from 'react';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Header from './components/Header/Header';

const SingleProducts = ({allProductsData, cartItems, addToCart}) => {
  return (
    <>
    <Header cartItems={cartItems}/>
    <SingleProduct allProductsData={allProductsData}  addToCart={addToCart}/>
    </>
  )
}

export default SingleProducts;