import React from 'react'
import './Header.scss'
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
function Header() {
  return (
    <div className='main-Header'>
        <div className="header-content">
        <ul className='left'>
        <li><Link to='/' >Home</Link></li>
         <li><Link to='/about' >About</Link></li>
        <li><Link to='/category' >Category</Link></li>
        </ul>
        <div className="center">
            VIETWIN
        </div>
        <div className="right">
           <AiOutlineSearch/>
           <AiOutlineHeart />
           <span className='cart-icon'>
            <AiOutlineShoppingCart />
            <span className='span-cart'>4</span>
           </span> 
        </div>
        </div>
    </div>
  )
}

export default Header