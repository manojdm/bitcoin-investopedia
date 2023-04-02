import React from 'react'
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
import base from '../../config/knowledgebase'
import { createChatBotMessage } from 'react-chatbot-kit'

const TopCoins = (e) => {

    const handleMessage = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

  return (
    <div className='ul-container top-coins'> 
        <ul>
            <li onClick={() => handleMessage('bitcoin')}><img src={bitcoin}></img> Bitcoin</li>
            <li onClick={() => handleMessage('ethereum')}><img src={ethereum}></img> Ethereum</li>
            <li onClick={() => handleMessage('tether')}><img src={tether}></img> USDT (tether)</li>
            <li onClick={() => handleMessage('polygon')}><img src={polygon}></img> Polygon</li>
            <li onClick={() => handleMessage('solana')}><img src={solana}></img> Solana</li>
            <li onClick={() => handleMessage('dogecoin')}><img src={dogecoin}></img> Doge</li>
            <li onClick={() => handleMessage('shibainu')}><img src={shiba}></img> Shiba</li>
            <li onClick={() => handleMessage('cardano')}><img src={cardano}></img> Cardano</li>
            <li onClick={() => handleMessage('tron')}><img src={tron}></img> Tron</li>
            <li onClick={() => handleMessage('bnb')}><img src={bnb}></img> BNB</li>
            <li onClick={() => handleMessage('fantom')}><img src={fantom}></img> Fantom</li>
        </ul>
    </div>
  )
}

export default TopCoins