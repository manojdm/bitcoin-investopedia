import React from 'react'
import contract from '../images/contract.png'
import usdm from '../images/usdm.png'
import spot from '../images/spot.png'
import { createChatBotMessage } from 'react-chatbot-kit'


const Calculator = (e) => {

  const handleSpot = () => {
    const botMessage =  createChatBotMessage('Please select the type',{
        widget: 'spot'
    })

    e.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
    }))
  }

  const handleUSDM = () => {
    const botMessage =  createChatBotMessage('Please select the type',{
      widget: 'usdm'
    })

    e.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
    }))   
  }

  const handleCOINM = () => {
    const botMessage =  createChatBotMessage('Please select the type',{
      widget: 'coinm'
    })

    e.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
    }))   
  }

  return (
    <div className='calculator ul-container'>
        <ul>
            <li onClick={(e) => handleSpot(e)}><span><img src={spot} /></span> Spot</li>
            <li onClick={(e) => handleUSDM(e)}><span><img src={usdm} /></span> USD-T Perpetual</li>
            <li onClick={(e) => handleCOINM(e)}><span><img src={contract} /></span> Coin-M Perpetual</li>
        </ul>
    </div>
  )
}

export default Calculator