import React, { useEffect } from 'react'
import bitcoin from '../images/bitcoin.png'
import ethereum from '../images/ethereum.png'
import tether from '../images/tether.png'
import polygon from '../images/polygon.png'
import solana from '../images/solana.png'
import dogecoin from '../images/dogecoin.png'
import shiba from '../images/shiba.png'
import cardano from '../images/cardano.png'
import tron from '../images/tron.png'
import bnb from '../images/bnb.png'
import fantom from '../images/fantom.png'

import { createChatBotMessage } from 'react-chatbot-kit'
import axios from 'axios'


const Price = (e) => {

    useEffect(() => {
        console.log('loading')
        if(!localStorage.getItem('price')){
            localStorage.setItem('price','BTCUSDT')
        }
    }, []);

    const updatePrice = async (txt, name) => {

        const url = `https://api.binance.com/api/v3/ticker/price?symbols=["${txt}"]`

        const {data} = await axios.get(url)

        const {price} = data[0]

        const message = createChatBotMessage(`Current price of ${name} is ${parseFloat(price).toFixed(2)} USDT`)

        e.setState((prev) => ({
            ...prev,
            price: txt,
            messages: [...prev.messages, message]
        }))
    }

    return (
        <div className='ul-container price'> 
            <ul>
                <li onClick={() => updatePrice('BTCUSDT', 'Bitcoin')}><img src={bitcoin}></img> Bitcoin</li>
                <li onClick={() => updatePrice('ETHUSDT','Ethereum')}><img src={ethereum}></img> Ethereum</li>
                <li onClick={() => updatePrice('MATICUSDT','Polygon')}><img src={polygon}></img> Polygon</li>
                <li onClick={() => updatePrice('SOLUSDT','Solana')}><img src={solana}></img> Solana</li>
                <li onClick={() => updatePrice('DOGEUSDT','Dogecoin')}><img src={dogecoin}></img> Doge</li>
                <li onClick={() => updatePrice('SHIBUSDT','Shiba')}><img src={shiba}></img> Shiba</li>
                <li onClick={() => updatePrice('ADAUSDT','Cardano')}><img src={cardano}></img> Cardano</li>
                <li onClick={() => updatePrice('TRXUSDT','TroN')}><img src={tron}></img> Tron</li>
                <li onClick={() => updatePrice('BNBUSDT','BNB')}><img src={bnb}></img> BNB</li>
                <li onClick={() => updatePrice('FTMUSDT','Fantom')}><img src={fantom}></img> Fantom</li>
            </ul>
        </div>  
    )
}

export default Price