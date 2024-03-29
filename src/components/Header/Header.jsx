import './Header.scss'
import { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHeart} from "react-icons/ai"
import Search from './Search/Search'
import Cart from '../Cart/Cart'
function Header() {
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  return (
    <>
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
           <AiOutlineSearch onClick={() => setshowSearch(true)}/>
           <AiOutlineHeart />
           <span className='cart-icon' onClick={() => setshowCart(true)}>
            <AiOutlineShoppingCart />
            <span className='span-cart'>4</span>
           </span> 
        </div>
        </div>
    </div>
    {showCart && <Cart setshowCart = {setshowCart}/>}
    {showSearch && <Search setshowSearch = {setshowSearch}/>}
    </>
  )
}

export default Header