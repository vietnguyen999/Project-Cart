import React from 'react'
import "./Home.scss"
import Banner from "./Banner/Banner"
import Newsletter from '../Footer/Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import Category from './Category/Category'
import Product from '../Product/Product'
function Home() {
  return (
    <div>
    <Banner/>
    <div className="main-content">
      <div className="layout">
      <Category/>
      <Product/>
      </div>
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home