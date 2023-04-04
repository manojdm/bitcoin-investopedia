import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer">
        <div className="items pages">
        <ul>
            <li className="main">Pages</li>
            <Link to='/terms'> <li>Terms and Conditions</li> </Link>
            <Link to='/privacy'> <li>Privacy policy</li> </Link>
        </ul>
        </div>
        <div className="items copyright">© Bitcoin Investopedia, 2022</div>
    </div>
    <div className="final">
        <p className="text">
        <i className="fa-brands fa-bitcoin" /> &nbsp;&nbsp;Managed by Team Bitcoin
        Investopedia
        </p>
    </div>
    </div>
    )
}

export default Footer