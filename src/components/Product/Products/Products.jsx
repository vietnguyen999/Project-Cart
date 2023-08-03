import React from 'react'
import "./Products.scss";
import producImg from "../../../assets/productIng.jpg"
function Products({id, data}) {
  return (
   <div className="products-cart">
    <div className="thumbnai">
      <img src={ process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url} alt=''/>
    </div>
      <div className="prod-details">
        <span className='name'>{data.title}</span>
        <span className='price'>&#8377; {data.price}</span>
      </div>
   </div>
  )
}

export default Products