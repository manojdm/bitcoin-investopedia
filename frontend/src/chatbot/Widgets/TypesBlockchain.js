import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import publicn from '../images/public.png'
import privaten from '../images/private.png'
import hybrid from '../images/hybrid.png'
import consortium from '../images/consortium.png'
import base from '../../config/knowledgebase'


const TypesBlockchain = (e) => {

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
            <li onClick={() => handleMessage('publicblockchain')}><img src={publicn}></img> Public Blockchain</li>
            <li onClick={() => handleMessage('privateblockchain')}><img src={privaten}></img> Private Blockchain</li>
            <li onClick={() => handleMessage('consortiumblockchain')}><img src={consortium}></img> Consortium Blockchain</li>
            <li onClick={() => handleMessage('hybridblockchain')}><img src={hybrid}></img> Hybrid Blockchain</li>
        </ul>
    </div>
  )
}

export default TypesBlockchain