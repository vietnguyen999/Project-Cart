import React from 'react'
import './Categorys.scss';
import Product from '../Product/Product'
function Category() {
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">Category Title</div>
        <Product innerPage={true}/>
      </div>
    </div>
  )
}

export default Category