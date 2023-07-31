import React from 'react'
import "./SingleProduct.scss";
import RelatedProduct from "./RelatedProduct/RelatedProduct";
import {FaFacebookF, FaTwitter,
     FaInstagram, FaLinkedinIn,
     FaInternetExplorer,
     FaCartPlus, FaPinterest}
    from "react-icons/fa";
import prod from "../../assets/category1.jpg"
function SingleProduct() {
  return (
    <div className="single-product-main-content">
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt=''/>
                </div>
                <div className="right">
                    <span className="name">Product Name</span>
                    <span className="price">Price</span>
                    <span className="desc">Product desciption</span>

                    <div className="cart-buttons">
                        <div className="quantity-button">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </div>
                       
                        <button className='add-to-cart-button'>
                             <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider"/>
                    <div className="info-item">
                        <span className="text-bold">
                            Category:
                        <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                                Share:
                        <span className='social-icons'>
                            <FaFacebookF size={16}/>
                            <FaTwitter size={16}/>
                            <FaInstagram size={16}/>
                            <FaLinkedinIn size={16}/>
                            <FaPinterest size={16}/>
                        </span>
                        </span>
                    </div>
                </div>
            </div>
            <RelatedProduct/>
        </div>
    </div>
  )
}

export default SingleProduct