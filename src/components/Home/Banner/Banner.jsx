import React from 'react'
import BannerIng from "../../../assets/banner-img.png"
import "./Banner.scss"
function Banner() {
  return (
    <div className='hero-banner'>
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                    convallis interpurus adipiscing dis parturient posuere ac a quam a eleifend montes parturient posuere curae tempor
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta V2">Shop Now</div>
                </div>
            </div>
            <img className='banner-img' src={BannerIng} alt=""/>
        </div>
    </div>
  )
}

export default Banner