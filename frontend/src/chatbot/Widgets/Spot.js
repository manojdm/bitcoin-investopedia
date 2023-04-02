import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import spotprofits from '../images/spot-profits.png'
import target from '../images/target.png'


const Spot = (e) => {

    const handleProfits = () => {
        const botMessage =  createChatBotMessage('Please fill the details',{
            widget: 'profits'
        })
    
        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }

    const handleTarget = () => {
        const botMessage =  createChatBotMessage('Please fill the details',{
            widget: 'target'
        })
    
        e.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage]
        }))
    }


  return (
    <div className='ul-container spot'>
        <ul>
            <li onClick={e => handleTarget(e)}><span><img src={target} /></span> Target price calculator</li>
            <li onClick={e => handleProfits(e)}><span><img src={spotprofits} /></span> Profits & ROI Calculator</li>
        </ul>
    </div>  
    )
}

export default Spot