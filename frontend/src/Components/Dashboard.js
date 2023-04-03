import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const userLogin = useSelector(state => state.userLogin)
  const {userData} = userLogin

  const navigate = useNavigate()

  useEffect(() => {
    if(!userData?.id){
      navigate('/login')
    }
  }, [])

  return (
<div className="container">
  <div className="dashboard-container">
    <div className="section greet-section">
      <div className="title">Hola <span className="username">Manoj!!</span></div>
      <div className="greet-msg">Let's get you started</div>
    </div>
    <div className="sections services-section">
      <p className="head">Our Services</p>
      <div className="content">
        <div className="block chatbot">
          <div className="left chatbot-title">
            <p>Interactive Chatbot</p>
          </div>
          <div className="right chatbot-content">
            Interactive chatbot to help you with everything in crypto.
            <Link to="/chatbot">chat now</Link>
          </div>
        </div>
        <div className="block market-prediction">
          <div className="left market-title">
            <p>Market Prediction</p>
          </div>
          <div className="right market-content">
            Market prediction using Exponential Moving Average to determine current market movement.
            <Link to="/market">Check now</Link>
          </div>
        </div>
        <div className="block survey">
          <div className="left survey-title">
            <p>Survey Analysis</p>
          </div>
          <div className="right survey-content">
            Survey results based on the survey done by Government of India to implement taxation.
            <Link to="/results">Check now</Link>
          </div>
        </div>
      </div>    
    </div>
  </div></div>
  )
}

export default Dashboard