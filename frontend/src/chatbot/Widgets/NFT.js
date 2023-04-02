import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import base from '../../config/knowledgebase'
import what from '../images/what.png'
import how from '../images/how.png'


const NFT = (e) => {

    const handleResponse = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

  return (
    <div className='ul-container NFT'>
        <ul>
            <li onClick={() => handleResponse('nft')}><img src={what}></img> What are NFT's ?</li>
            <li onClick={() => handleResponse('hownft')}><img src={how}></img> How NFT's work ?</li>
        </ul>
    </div>
  )

}

export default NFT