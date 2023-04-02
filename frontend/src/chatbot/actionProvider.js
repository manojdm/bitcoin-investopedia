import axios from "axios";
import React from "react";
import { createCustomMessage } from "react-chatbot-kit";
import {useDispatch} from 'react-redux'
import { saveMessages as saveM , deleteMessages as deleteM} from "../Actions/messageActions";
import coins from "../config/coins";
import base from '../config/knowledgebase.js'

export const ActionProvider = ({
    createChatBotMessage,
    setState,
    children,
  }) => {
    const dispatch = useDispatch()
    
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello, How can I help you today ?');

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
    }

    const handleNothing = () => {
      const botMessage = createChatBotMessage('Hello, I didn\'t receive your command, please type start to start');

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }

    const handleStart = () => {
      const botMessage = createChatBotMessage('Hello, Please select an option to start',{
        widget: 'start'
      });

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    }

    const handlePrice = async (msg) => {
      const coin = msg.split(' price')[0].toLowerCase().replace(' ','').trim()
      const code = coins[`${coin}`]

      let message

      if(code != undefined){
        const {data} = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbols=["${code}"]`)

        const {price} = data[0]
  
        message = createChatBotMessage(`Current price of ${coin} is ${parseFloat(price).toFixed(2)} USDT`)
      } else {
        message = createChatBotMessage(`Please make sure the coin exits in Binance USDT Perpetual and place make sure the format is "Coin price"`)
      }


      setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message]
      }))

    }

    const handleChart = (msg) => {
      const coin = msg.split(' chart')[0].toLowerCase().replace(' ','').trim()
      const code = coins[`${coin}`]

      console.log(coin, code)

      let message

      if(code != undefined){
        message = createCustomMessage('chart','chartCustom')
      } else {
        message = createChatBotMessage(`Please make sure the coin exits in Binance USDT Perpetual and place make sure the format is "Coin chart"`)
      }

      setState((prev) => ({
          ...prev,
          messages: [...prev.messages, message]
      }))

      localStorage.setItem('chart', code)
    }

    const handleKnowledge = (key) => {
      const txt = base[key]

      const message = createChatBotMessage(txt)

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message]
      }))
    }

    const saveMessages = () => {
      const botMessage = createChatBotMessage('Messages saved!');

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    
      setState(state => {
        localStorage.setItem('chat_messages', JSON.stringify(state.messages))
        return state
      })

      setTimeout(() => dispatch(saveM(JSON.parse(localStorage.getItem('chat_messages')))), 1000)

    }
  
    const deleteMessages = () => {
      const botMessage = createChatBotMessage('Messages deleted!');

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    
      localStorage.removeItem('chat_messages')

      dispatch(deleteM())

    }    

    // Put the handleHello function in the actions object to pass to the MessageParser
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
                handleHello,
                saveMessages,
                deleteMessages,
                handlePrice,
                handleChart,
                handleKnowledge,
                handleNothing,
                handleStart
            },
          });
        })}
      </div>
    );
  };