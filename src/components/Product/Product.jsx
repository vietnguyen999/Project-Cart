import React from 'react'
import "./Product.scss";
import Products from './Products/Products'
function Product() {
  return (
    <div className="product-container">
    <div className="sec-heading">Section Heading</div>
        <div className="product">
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
            <Products/>
        </div>
</div>
  )
}

export default Product