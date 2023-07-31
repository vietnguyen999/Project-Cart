import React from 'react'
import "./Products.scss";
import producImg from "../../../assets/productIng.jpg"
function Products() {
  return (
   <div className="products-cart">
    <div className="thumbnai">
      <img src={producImg} alt=''/>
    </div>
      <div className="prod-details">
        <span className='name'>Products name</span>
        <span className='price'>&#8377; 499</span>
      </div>
   </div>
  )
}

export default Products