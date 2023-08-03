import React from 'react'
import { useEffect, useContext} from 'react'


import "./Home.scss"

import Banner from "./Banner/Banner"
import Category from './Category/Category'
import Product from '../Product/Product'
import { fetchDataFromApi } from '../../uitls/api.js'
import { Context } from '../../uitls/context'

const Home = () => {
    const {categories, setCategories, products, setProducts} = useContext (Context);
  useEffect(() => {
      getCategories() ;
      getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) =>{
       setCategories(res);
       // console.log(res)
    } );
  };
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) =>{
     //  console.log(res)
        setProducts(res);
    }
    );
  };


  return (
    <div>
    <Banner/>
    <div className="main-content">
      <div className="layout">
      <Category categories={categories} />
      <Product  products={products} headingText="Popular Product"/>
      </div>
    </div>
    </div>
  )
}

export default Home