import React from 'react'
import cryptocurrency from '../images/cryptocurrency.png'
import nft from '../images/nft.png'
import blockchain from '../images/blockchain.png'
import candles from '../images/candles.webp'
import tips from '../images/tips.png'
import stratagy from '../images/stratagy.png'
import { createChatBotMessage } from 'react-chatbot-kit'



const KnowledgeBase = (e) => {

    const handleWidget = (widget) => {
        const botMessage = createChatBotMessage('Which one do you choose to start with ?', {
            widget: widget
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }

  return (
    <div className='ul-container knowledge'>
        <ul>
            <li onClick={(e) => handleWidget('cryptocurrency')}><img src={cryptocurrency}></img> Cryptocurrencies</li>
            <li onClick={(e) => handleWidget('blockchain')} ><img src={blockchain}></img> Blockchain</li>
            <li onClick={(e) => handleWidget('nft')}><img src={nft}></img> NFT's</li>
            <li onClick={(e) => handleWidget('trading')}><img src={candles}></img> Trading</li>
            <li onClick={(e) => handleWidget('tips')}><img src={stratagy}></img> Tips</li>
        </ul>
    </div>
  )
}

export default KnowledgeBase