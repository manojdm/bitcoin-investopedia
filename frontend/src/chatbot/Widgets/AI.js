import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import candles from '../images/candles.webp'
import bitcoin from '../images/bitcoin.png'
import axios from "axios"


const AI = (e) => {

    const handleCandles = () => {
        const message = createChatBotMessage('Please select the coin of your preferance',{
            widget: 'candles'
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const handlePredictions = async () => {
        const {data} = await axios.get('http://localhost:8000/api/prediction/Bitcoin')

        const message = createChatBotMessage(`Price prediction of Bitcoin for tomorrow is ${data.prediction.toFixed(2)}`)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))    }

  return (
    <div className='AI ul-container'>
        <ul>
            <li onClick={e => handleCandles(e)}><span><img src={candles} /></span> Daily candle close prediction</li>
            <li onClick={e => handlePredictions(e)}><span><img src={bitcoin} /></span> Bitcoin Next day Price Prediction</li>
        </ul>
    </div>    )
}

export default AI