import React from 'react';
import { saveMessages } from '../Actions/messageActions';
import coins from '../config/coins'

const MessageParser = ({ children, actions, mess, stateRef }) => {


  const parse = (message) => {

    const msg = message.toLowerCase()

    if(msg.includes('hello')){
        actions.handleHello()
    } else if(msg.includes('price')){
      actions.handlePrice(msg)

    } else if(msg.includes('chart')){
      actions.handleChart(msg)

    } else if(msg.includes('top') && msg.includes('cryptocurrenc')){
      actions.handleKnowledge('topcryptocurrencies')

    } else if(msg.includes('how') && msg.includes('cryptocurrenc')){
      actions.handleKnowledge('howcryptocurrencies')

    } else if(msg.includes('cryptocurrenc')){
      actions.handleKnowledge('cryptocurrencies')

    } else if(msg.includes('how') && msg.includes('blockchain')){
      actions.handleKnowledge('howblockchain')
      
    } else if(msg.includes('public') && msg.includes('blockchain')){
      actions.handleKnowledge('publicblockchain')
      
    } else if(msg.includes('private') && msg.includes('blockchain')){
      actions.handleKnowledge('privateblockchain')
      
    } else if(msg.includes('consortium') && msg.includes('blockchain')){
      actions.handleKnowledge('consortiumblockchain')
      
    } else if(msg.includes('hybrid') && msg.includes('blockchain')){
      actions.handleKnowledge('hybridblockchain')

    } else if(msg.includes('blockchain')){
      actions.handleKnowledge('blockchain')
      
    } else if(msg.includes('how') && msg.includes('nft')){
      actions.handleKnowledge('hownft')

    } else if(msg.includes('nft')){
      actions.handleKnowledge('nft')
       
    } else if(msg.includes('day') && msg.includes('trading')){
      actions.handleKnowledge('daytrading')
      
    } else if(msg.includes('range') && msg.includes('trading')){
      actions.handleKnowledge('rangetrading')
      
    } else if(msg.includes('high') && msg.includes('trading')){
      actions.handleKnowledge('highfrequencytrading')
      
    } else if(msg.includes('dollar') && msg.includes('averaging')){
      actions.handleKnowledge('dollarcostaveraging')
      
    } else if(msg.includes('trading')){
      actions.handleKnowledge('trading')

    } else if(msg.includes('what') && (msg.includes('bitcoin') || msg.includes('btc'))){
      actions.handleKnowledge('bitcoin')

    } else if(msg.includes('what') && (msg.includes('ethereum') || msg.includes('eth'))){
      actions.handleKnowledge('ethereum')

    } else if(msg.includes('what') && (msg.includes('tether') || msg.includes('usdt'))){
      actions.handleKnowledge('tether')

    } else if(msg.includes('what') && (msg.includes('polygon') || msg.includes('matic'))){
      actions.handleKnowledge('polygon')

    } else if(msg.includes('what') && (msg.includes('solana') || msg.includes('sol'))){
      actions.handleKnowledge('solana')

    } else if(msg.includes('what') && (msg.includes('dogecoin') || msg.includes('doge'))){
      actions.handleKnowledge('dogecoin')

    } else if(msg.includes('what') && (msg.includes('shiba') || msg.includes('shib'))){
      actions.handleKnowledge('shibainu')

    } else if(msg.includes('what') && (msg.includes('cardano') || msg.includes('ada'))){
      actions.handleKnowledge('cardano')

    } else if(msg.includes('what') && (msg.includes('tron') || msg.includes('trx'))){
      actions.handleKnowledge('tron')

    } else if(msg.includes('what') && (msg.includes('bnb') || msg.includes('binance'))){
      actions.handleKnowledge('bnb')

    } else if(msg.includes('what') && (msg.includes('fantom') || msg.includes('ftm'))){
      actions.handleKnowledge('fantom')

    } else if(msg == 'save chats'){
      actions.saveMessages()

    } else if(msg == 'delete chats'){
      actions.deleteMessages()

    } else if(msg == 'start'){
      actions.handleStart()
    } else {
      actions.handleNothing()
    }

  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser