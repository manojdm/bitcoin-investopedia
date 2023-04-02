import React from 'react'
import what from '../images/what.png'
import how from '../images/how.png'
import blockchain from '../images/blockchain.png'
import { createChatBotMessage } from 'react-chatbot-kit'

const Blockchain = (e) => {

    const handleResponse = (key) => {
        const response = base[key]

        const message = createChatBotMessage(response)

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const handleTypes = () => {
        const botMessage = createChatBotMessage('Types of Blockchain are: ', {
            widget: 'typesblockchain'
        })

        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }


  return (
    <div className='ul-container blockchain'>
        <ul>
            <li onClick={() => handleResponse('blockchain')}><img src={what}></img> What is blockchain ?</li>
            <li onClick={() => handleResponse('howblockchain')}><img src={how}></img> How blockchain works ?</li>
            <li onClick={() => handleTypes()}><img src={blockchain}></img> Blockchain Types</li>
        </ul>
    </div>
)
}

export default Blockchain