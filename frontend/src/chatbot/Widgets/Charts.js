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

import { createChatBotMessage, createCustomMessage } from 'react-chatbot-kit'


const Charts = (e) => {

    useEffect(() => {
        if(!localStorage.getItem('chart')){
            localStorage.setItem('chart','BTCUSDT')
        }
    }, []);

    const updateChart = (txt) => {
        const message = createCustomMessage('chart','chartCustom')
        e.setState((prev) => ({
            ...prev,
            chart: txt,
            messages: [...prev.messages, message]
        }))

        localStorage.setItem('chart', txt)
    }

    return (
        <div className='charts'> 
            <ul>
                <li onClick={() => updateChart('BTCUSDT')}><img src={bitcoin}></img> Bitcoin</li>
                <li onClick={() => updateChart('ETHUSDT')}><img src={ethereum}></img> Ethereum</li>
                <li onClick={() => updateChart('USDUSDT')}><img src={tether}></img> Tether</li>
                <li onClick={() => updateChart('MATICUSDT')}><img src={polygon}></img> Polygon</li>
                <li onClick={() => updateChart('SOLUSDT')}><img src={solana}></img> Solana</li>
                <li onClick={() => updateChart('DOGEUSDT')}><img src={dogecoin}></img> Doge</li>
                <li onClick={() => updateChart('SHIBUSDT')}><img src={shiba}></img> Shiba</li>
                <li onClick={() => updateChart('ADAUSDT')}><img src={cardano}></img> Cardano</li>
                <li onClick={() => updateChart('TRXUSDT')}><img src={tron}></img> Tron</li>
                <li onClick={() => updateChart('BNBUSDT')}><img src={bnb}></img> BNB</li>
                <li onClick={() => updateChart('FTMUSDT')}><img src={fantom}></img> Fantom</li>
            </ul>
        </div>  
    )
}

export default Charts