import React from 'react'
import pnl from '../images/pnl.png'
import target from '../images/target.png'
import liquidation from '../images/liquidation.png'
import { createChatBotMessage } from 'react-chatbot-kit'


const USDM = (e) => {

  const handlePNL = () => {
    const botMessage =  createChatBotMessage('Please fill the details',{
        widget: 'usdpnl'
    })

    e.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
    }))
  }

  const handleTarget = () => {
    const botMessage =  createChatBotMessage('Please fill the details',{
        widget: 'usdtarget'
    })

    e.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage]
    }))
  }

  return (
    <div className='usdm ul-container'>
        <ul>
            <li onClick={e => handlePNL(e)}><span><img src={pnl} /></span> PNL</li>
            <li onClick={e => handleTarget(e)}><span><img src={target} /></span> Target Price</li>
            {/* <li onClick={e => handleLiquidation(e)}><span><img src={liquidation} /></span> liquidation price</li> */}
        </ul>
    </div>    )
}

export default USDM