import React from 'react'
import what from '../images/what.png'
import candles from '../images/candles.webp'
import Tips from '../images/tips.png'
import { createChatBotMessage } from 'react-chatbot-kit'
import base from '../../config/knowledgebase'

const Trading = (e) => {

    const handleResponse = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const handleTypes = () => {
        const botMessage = createChatBotMessage('Types of Trading are: ', {
            widget: 'tradingtypes'
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }    

    const handleTips = () => {
        const botMessage = createChatBotMessage('Types of Trading are: ', {
            widget: 'tradingtypes'
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }  

  return (
    <div className='ul-container trading'>
        <ul>
            <li onClick={() => handleResponse('trading')}><img src={what}></img> What is trading ?</li>
            <li onClick={() => handleTypes()}><img src={candles}></img> Types of trading</li>
            <li onClick={() => handleTips()}><img src={Tips}></img> Trading Tips</li>
        </ul>
    </div>  )
}

export default Trading