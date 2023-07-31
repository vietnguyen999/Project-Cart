import React from 'react'
import {FaMobileAlt} from "react-icons/fa"
import {FaEnvelope} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
import Payment from "../../assets/payments.png"
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Voluptatem accusantium doloremque laudantium, totam rem 
                    aperiam, eaque ipque ipsa quaw ab illo inventore veritatis et 
                    quasi architecho beatae witae dicta sunt ewplicabo eaque
                    ipsa quae ab illo
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow/>
                    <div className="text">
                        kayaloram Rd, Punnamada, Kotankulangara, Alappuzha,
                        Kerala, 688006
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt/>
                    <div className="text">Phone: 0941828083</div>
                </div>
                <div className="c-item">
                    <FaEnvelope/>
                    <div className="text">Email: nguyenducviet888999@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categries</div>
                <div className="text">Headphones</div>
                <div className="text">Smart Watches</div>
                <div className="text">Bluetooch Speakers</div>
                <div className="text">Wireless Earbuds</div>
                <div className="text">Home Theatre</div>
                <div className="text">Projectors</div>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <div className="text">Home</div>
                <div className="text">About</div>
                <div className="text">Privary Policy</div>
                <div className="text">Returns</div>
                <div className="text">Terms & Conditions</div>
                <div className="text">Contact Us</div>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDVSTORE 2022 CREATED BY JS DEV. PREMIUN e-COMMERCE SOLUTIONS
                </div>
                <img src={Payment} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Footer