import React from 'react'
import "./Category.scss";
import category1 from "../../../assets/category1.jpg"
function Category() {
  return (
    <div className="shop-by-catecategory">
      <div className="categories">
        <div className="category">
         <img src={category1} alt=''/>
        </div>
        <div className="category">
          <img  src={category1} alt=''/>
        </div>
        <div className="category">
          <img  src={category1} alt=''/>
        </div>
        <div className="category">
          <img src={category1} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Category