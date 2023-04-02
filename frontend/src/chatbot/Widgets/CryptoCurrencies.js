import React from 'react'
import what from '../images/what.png'
import how from '../images/how.png'
import cryptocurrency from '../images/cryptocurrency.png'
import base from '../../config/knowledgebase'
import { createChatBotMessage } from 'react-chatbot-kit'


const CryptoCurrencies = (e) => {

    const handleResponse = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const handleTop = () => {
        const botMessage = createChatBotMessage('Here are few top coins', {
            widget: 'topcoins'
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }

  return (
    <div className='ul-container cryptocurrency'>
        <ul>
            <li onClick={() => handleResponse('cryptocurrencies')}><img src={what}></img> What are cryptocurrencies ?</li>
            <li onClick={() => handleResponse('howcryptocurrencies')}><img src={how}></img> How cryptouurrencies work ?</li>
            <li onClick={() => handleTop()}><img src={cryptocurrency}></img> Top Cryptocurrencies</li>
        </ul>
    </div>
  )
}

export default CryptoCurrencies