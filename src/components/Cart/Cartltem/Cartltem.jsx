import React from 'react'
import "./Cartltem.scss";
import prod from "../../../assets/category1.jpg";
import {MdClose} from "react-icons/md"
function Cartltem() {
  return (
        <div className="cart-products">
            <div className="cart-product">
                <div className="img-container">
                <img src={prod} alt=''/>
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <MdClose className='close-btn'/>
                        <div className="quantity-button">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                        <div className="text">
                            <span>2</span>
                            <span>x</span>
                            <span className='highl'>&#8377;453</span>
                        </div>
                </div>
            </div>
        </div>

  )
}

export default Cartltem