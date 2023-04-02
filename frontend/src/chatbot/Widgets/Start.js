import React, { useEffect } from 'react'
import '../../styles/widget.css'
import knowledge from '../images/knowledge.png'
import charts from '../images/charts.png'
import dollar from '../images/dollar.png'
import calculator from '../images/calculator.png'
import AI from '../images/AI.svg'
import { createChatBotMessage } from 'react-chatbot-kit'
import { useDispatch, useSelector } from 'react-redux'
import { getMessages } from '../../Actions/messageActions'



const Start = (e) => {

  const dispatch = useDispatch()

  const {messages} = useSelector(state => state.messages) 

  useEffect(() => {
    if(!messages){
      dispatch(getMessages())
    }
    if(messages){
      const msgs = messages.messages
      msgs.forEach(msg => delete msg['_id'])

      if(!localStorage.getItem('chat_messages')){
        localStorage.setItem('chat_messages',JSON.stringify(msgs))
        document.location.reload()
      }
    }

  },[messages])

  const handleCharts = () => {
    const botMessage = createChatBotMessage('Please select a coin',{
      widget: 'charts'
    })

    e.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handlePrices = () => {
    const botMessage = createChatBotMessage('Please select a coin',{
      widget: 'prices'
    })

    e.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  }

  const handleCalculator = () => {
    const botMessage = createChatBotMessage('Please select your trading type',{
      widget: 'calculator'
    })

    e.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const handleAI = () => {
    const botMessage = createChatBotMessage('Please select your choice',{
      widget: 'ai'
    })

    e.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  const handleKnowledge = () => {
    const botMessage = createChatBotMessage('Which one do you choose to start with ?', {
      widget: 'knowledge'
    })

    e.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage]
    }))
  }

  return (
    <div className='start'> 
        <ul>
            <li onClick={(e) => handleKnowledge(e)}><img src={knowledge}></img> Knowledge Base</li>
            <li onClick={(e) => handleCharts(e)} ><img src={charts}></img> Cryptocurrency charts</li>
            <li onClick={(e) => handlePrices(e)}><img src={dollar}></img> Cryptocurrency prices</li>
            <li onClick={(e) => handleCalculator(e)}><img src={calculator}></img> Calculator</li>
            <li onClick={(e) => handleAI(e)}><img src={AI}></img> AI/ML</li>
        </ul>
    </div>
  )
}

export default Start