import React, { useEffect } from 'react'
import { ActionProvider } from '../chatbot/actionProvider';
import config from '../chatbot/config';
import MessageParser from '../chatbot/messageParser';
import Chatbot from "react-chatbot-kit";
import { useDispatch, useSelector } from 'react-redux';
import '../styles/chatbot.css'
import 'react-chatbot-kit/build/main.css';
import { getMessages } from '../Actions/messageActions';
import loadNav from '../scripts/nav';



const Advisorybot = () => {

    useEffect(() => {
        loadNav()
    },[])

    const saveMessages = (messages, HTMLString) => {
        console.log(messages, HTMLString)
        localStorage.setItem('chat_messages', JSON.stringify(messages));
    };

    const loadMessages = () => {

        if(localStorage.getItem('chat_messages') != undefined){
            const   messages = JSON.parse(localStorage.getItem('chat_messages'));
            return messages;
        }

      };

  return (
        <div className="container">
        <div className="section chatbot">
            <div className="content">
            <div className="head">Advisory Bot</div>
            <div className="msg">
                Our Advisory bot is to help out all new crypto enthusiaists.
            </div>
            </div>
            <div className="chatbot">
                <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} messageHistory={loadMessages()} saveMessages={saveMessages}></Chatbot>
            </div>
        </div>
        </div>
  )
}

export default Advisorybot