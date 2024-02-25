import React from "react";
import Shope from "./Shope";
import {BrowserRouter} from 'react-router-dom'
const Cart = () => {
  return (
    <>
    
      <h3>Your cart</h3>
      <p>Not ready to checkout?coantinue shoping</p>
      <div className="order-collectio">
        <div className="order1">
          <h1>Natural Honey Bottle </h1>
          <p>Size:L</p>
          <p>Quantity:1</p>
          <p>by:vendor name</p>
          <p>$99</p>
        </div>
        <hr />
        <div className="order2">
          <h1>Natural Honey Bottle </h1>
          <p>Size:S</p>
          <p>Quantity:1</p>
          <p>by:vendor name</p>
          <p>$89</p>
        </div>
      </div>
      <div className="order">
        <h1>Order Summery</h1>
        <h4>Subtotal </h4>
        <p>calculated in the next step</p>
        <hr />
        <h4>total &189</h4>
      </div>
      <button onClick={Shope}>Coantinue to checkout</button>
    </>
  );
  
};
export default Cart;
