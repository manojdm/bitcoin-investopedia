import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import base from '../../config/knowledgebase'
import candles from '../images/candles.webp'
import tips from '../images/tips.png'
import charts from '../images/charts.png'
import dollar from '../images/dollar.png'


const TradingTypes = (e) => {

    const handleMessage = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }    

  return (
    <div className='ul-container trading-types'> 
        <ul>
            <li onClick={() => handleMessage('daytrading')}><img src={candles}></img> Day Trading</li>
            <li onClick={() => handleMessage('rangetrading')}><img src={tips}></img> Range Trading</li>
            <li onClick={() => handleMessage('highfrequencytrading')}><img src={charts}></img> High Frequency Trading</li>
            <li onClick={() => handleMessage('dollarcostaveraging')}><img src={dollar}></img> Dollar cost averaging</li>
        </ul>
    </div>
  )
}

export default TradingTypes