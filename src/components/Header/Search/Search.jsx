import React from 'react'
import {MdClose} from "react-icons/md"
import "./Search.scss";
import Newsletter from '../../Footer/Newsletter/Newsletter';
import Footer from '../../Footer/Footer';
import producImg from "../../../assets/productIng.jpg"
function Search({ setshowSearch}) {
  return (
   
    <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus placeholder='Search for products' />
            <MdClose onClick={()=>  setshowSearch(false)}/>
        </div>
        <div className="search-result-content">
           <div className="search-result">
            <div className="search-results-item">
                <div className="img-container">
                 <img src={producImg} alt=''/>
                </div>
                <div className="prod-details">
                    <span className="name">product name</span>
                    <span className="desc">product desc </span>
                </div>
            </div>
           </div>     
        </div>
        <Newsletter/>
         <Footer/>
    </div>
    
   
  )
}

export default Search