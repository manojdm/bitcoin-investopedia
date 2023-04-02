import React from 'react'

const Footer = () => {
  return (
    <div className="footer-container">
    <hr />
    <div className="footer">
        <div className="items pages">
        <ul>
            <li className="main">Pages</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
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