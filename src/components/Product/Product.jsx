import React from 'react'
import "./Product.scss";
import Products from './Products/Products'
function Product({ innerPage, headingText }) {
  return (
    <div className="product-container">
    {!innerPage && <div className="sec-heading">{headingText}</div>}
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