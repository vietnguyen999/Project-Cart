import React from 'react'
import "./Product.scss";
import Products from './Products/Products'
function Product({ products, innerPage, headingText }) {
  return (
    <div className="product-container">
    {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="product">
          {products?.data?.map((item) =>(
             <Products key={item.id} id={item.id} data={item.attributes}/>
          ))}
           
            
        </div>
</div>
  )
}

export default Product