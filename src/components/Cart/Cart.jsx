import React from 'react'
import "./Cart.scss";
import {MdClose} from "react-icons/md"
import{BsCartPlus} from "react-icons/bs"
import Cartltem from './Cartltem/Cartltem';

function Cart({ setshowCart }) {
  return (
    <div className="cart-panel">
        <div className="opac-layer"></div>
        <div className="cart-conent">
            <div className="cart-header">
                <span className="heading">Shopping cart</span>
                 <span className="close-btn" onClick={ () =>setshowCart(false)}>
                    <MdClose />
                    <span className='text'>Close</span>
                 </span>
            </div>
            {/* <div className="empty-cart">
                <BsCartPlus/>
                <span>No products in the cart</span>
                <button className='return-cta'>RETURN TO SHOP</button>
            </div> */}
             <>
            <Cartltem/>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;897</span>
              </div>
              <div className="button">
                <button className="checkout-cta">Checkout</button>
              </div>
            </div>
            </>

        </div>
    </div>
  )
}

export default Cart