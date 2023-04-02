import React from 'react'
import bitcoin from '../images/bitcoin.png'
import ethereum from '../images/ethereum.png'
import solana from '../images/solana.png'
import polygon from '../images/polygon.png'
import dogecoin from '../images/dogecoin.png'
import axios from 'axios'
import { createChatBotMessage } from 'react-chatbot-kit'

const Candles = (e) => {
  const handleClick = async (code, txt) => {

    const binance = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${code}&interval=1d&limit=1`)
    let {data} = binance
    const coin = data[0]

    const today = new Date()

    const open = parseFloat(parseFloat(coin[1]).toFixed(6))
    const high = parseFloat(parseFloat(coin[2]).toFixed(6))
    const low = parseFloat(parseFloat(coin[3]).toFixed(6))
    const day = today.getDay()

    if(open && high && low){

        const data = {
            open,
            high,
            low,
            day,
        }

        console.log(coin)
        console.log(data)

        const req = await axios.post(`http://localhost:8000/api/candles/${txt}`,data)
        const res = req.data

        const message = createChatBotMessage(`Today's candle close prediction for ${txt} is ${(res.prediction).toFixed(6)} USDT`)

        e.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message]
        }))
        
    }
  }

  return (
    <div className='candles ul-container'>
        <ul>
        <li onClick={() => handleClick('BTCUSDT', 'Bitcoin')}><img src={bitcoin} /> Bitcoin</li>
        <li onClick={() => handleClick('ETHUSDT','Ethereum')}><img src={ethereum} /> Ethereum</li>
        <li onClick={() => handleClick('SOLUSDT','Solana')}><img src={solana} /> Solana</li>
        <li onClick={() => handleClick('MATICUSDT','Polygon')}><img src={polygon} /> Matic</li>
        <li onClick={() => handleClick('DOGEUSDT','Dogecoin')}><img src={dogecoin} /> Doge</li>
        </ul>
    </div>
  )
}

export default Candles