import React, { useEffect } from 'react'
import loadNav from '../scripts/nav'
import '../styles/home.css'

const Home = () => {

  return (
<div className="container">
  <div className="section main-section">
    <div className="content">
      <div className="text">
        <p className="head">Know everything to start with Cryptocurrencies</p>
        <div className="buttons">
          <a href="/" className="btn btn-left">
            know more
          </a>
          <a href="/" className="btn btn-right">
            Take our survey
          </a>
        </div>
        <p className="msg">
          We will provide you with all the resources to start with crypto market
        </p>
      </div>
    </div>
    <div className="bg">
      <img src="https://datasearchconsulting.com/wp-content/uploads/2020/09/inside-sale.png" />
    </div>
  </div>
  <div className="section join-section">
    <p className="head">Learn more about Cryptocurrencies</p>
    <div className="msg">
      <div className="text">
        <p>
          Bitcoin Investopedia's aim is to build a platform to learn more about
          blockchain and Cryptocurrency trading. Join us now and start learning
          more
        </p>
        <a href="/" className="btn btn-started">
          Get Started
        </a>
      </div>
    </div>
  </div>
  <div className="section form-section">
    <p className="head">Taxation Survey</p>
    <div className="text">
      <p className="msg">
        Research based on decision of Government of India to implement a
        taxation on Cryptocurrencies(30%) and using data science to derive the
        statistics.
      </p>
      <a href="/" className="btn btn-right">
        Take our survey
      </a>
    </div>
  </div>
  <div className="section services-section">
    <p className="head">Our Services</p>
    <div className="content">
      <div className="block chatbot">
        <div className="left chatbot-title">
          <p>Interactive Chatbot</p>
        </div>
        <div className="right chatbot-content">
          Interactive chatbot built using python and Machine Learning Algorithms
          which provides all the essential resources/support required for one to
          start diving into crypto market.
        </div>
      </div>
      <div className="block market-prediction">
        <div className="left market-title">
          <p>Market Prediction</p>
        </div>
        <div className="right market-content">
          Prediction of Market's momentum(Bull/Bear) based on Exponential Moving
          Average(EMA) Algorithm. 9 Day Moving Average, 20 Day Moving Average
          and 50 Day Moving Average are our prefered configs.
        </div>
      </div>
      <div className="block survey">
        <div className="left survey-title">
          <p>Survey Analysis</p>
        </div>
        <div className="right survey-content">
          Survey conducted based on the decision of Indian Government to impose
          taxation on Cryptocurrencies and how's affecting the users in the long
          run during the bearish cycle.
        </div>
      </div>
    </div>
  </div>

</div>


  )
}

export default Home