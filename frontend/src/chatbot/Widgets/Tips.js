import React from 'react'
import tips from '../images/tips.png'
import mindset from '../images/mindset.png'
import { createCustomMessage } from 'react-chatbot-kit'


const Tips = (e) => {

    const handleTips = () => {
        const message = createCustomMessage('tips','tradingTips')
        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

    const handleMindset = () => {
        const message = createCustomMessage('mindset','tradersMindset')
        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message]
        }))
    }

  return (
    <div className='ul-container knowledge'>
        <ul>
            <li onClick={(e) => handleTips()}><img src={tips}></img> Trading Tips</li>
            <li onClick={(e) => handleMindset()} ><img src={mindset}></img> Traders Mindset</li>

        </ul>
    </div>
  )
}

export default Tips