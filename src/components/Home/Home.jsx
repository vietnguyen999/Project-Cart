import React from 'react'
import "./Home.scss"
import Banner from "./Banner/Banner"
import Category from './Category/Category'
import Product from '../Product/Product'
function Home() {
  return (
    <div>
    <Banner/>
    <div className="main-content">
      <div className="layout">
      <Category/>
      <Product  headingText="Popular Product"/>
      </div>
    </div>
    </div>
  )
}

export default Home