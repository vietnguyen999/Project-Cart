import React from 'react'
import "./Newsletter.scss";
import {FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
function Newsletter() {
  return (
    <div className="newsletter-section">
        <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for later updates and offers</span>
        <div className="form">
            <input type="text" placeholder='Email Address' />
            <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accor dance with our Privacy Policy</div>
        <div className="social-icons">
            <div className="icon"><FaFacebookF size={14}/></div>
            <div className="icon"><FaTwitter size={14}/></div>
            <div className="icon"><FaInstagram size={14}/></div>
            <div className="icon">< FaLinkedinIn size={14}/></div>
        </div>
        </div>
    </div>
  )
}

export default Newsletter