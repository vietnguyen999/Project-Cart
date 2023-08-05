import React from "react";
import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import Cartltem from "./Cartltem/Cartltem";

import { useContext } from "react";
import { Context } from "../../uitls/context";

function Cart({ setshowCart }) {
  const { cartItems, cartSubTotal } = useContext(Context);
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-conent">
        <div className="cart-header">
          <span className="heading">Shopping cart</span>
          <span className="close-btn" onClick={() => setshowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartPlus />
            <span>No products in the cart</span>
            <button className="return-cta">RETURN TO SHOP</button>
          </div>
        )}
    {!!cartItems?.length &&    <>
          <Cartltem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>}
      </div>
    </div>
  );
}

export default Cart;
