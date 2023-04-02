import React, { useState } from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const CoinMPnL = (e) => {

    const [quantity, setQuantity] = useState(0)
    const [leverage, setLeverage] = useState(0)
    const [entry, setEntry] = useState(0)
    const [exit, setExit] = useState(0)
    const [type, setType] = useState('long')

    const handleSubmit = (x) => {

        x.preventDefault()

        if(quantity != 0 && leverage !=0 && entry != 0 && exit !=0){
            const initalMargin = (quantity*1*(1/leverage)/entry)*100
            let pnl
            if(type=='long'){
                pnl = 1*quantity*1*((1/entry)-(1/exit))*100
            }else {
                pnl = -1*quantity*1*((1/entry)-(1/exit))*100
            }
            const roe = (pnl/initalMargin)*100
    
            const message = createChatBotMessage('Results of your calculations are: ',{
                widget: 'results'
            })
    
            e.setState((prev) => ({
                ...prev,
                results: {
                    'Initial Margin': initalMargin,
                    'PNL': pnl,
                    'roi': roe
                },
                messages: [...prev.messages, message]
            }))
        } else {
            alert('Please fill all the fields')
        }
    
    }
 
  return (
    <form className='form coinmpnl'>
        <div className='form-div radio'>
            <label htmlFor='type'></label>
            <div className='long-div div'>
                <input 
                    checked = {type === 'long'}
                    onChange={(e) => e.target.value == 'long' && setType('long')}
                    id='long'
                    type='radio'
                    name='type'
                    defaultValue='long' />
                <label htmlFor='long'> Long</label>
            </div>
            <div className='short-div div'>
                <input                     
                    checked = {type === 'short'}
                    onChange={(e) => e.target.value == 'short' && setType('short')}
                    id='short' 
                    type='radio' 
                    name='type' 
                    defaultValue='short' />
                <label htmlFor='short'> Short</label>
            </div>
        </div>
        <div className='form-div'>
            <label>quantity</label>
            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type='number' className='quantity input' required/>
        </div>
        <div className='form-div'>
            <label>leverage (x)</label>
            <input value={leverage} onChange={(e) => setLeverage(e.target.value)} type='number' className='leverage input' required/>
        </div>

        <div className='form-div'>
            <label>Entry Price</label>
            <input value={entry} onChange={(e) => setEntry(e.target.value)} type='number' className='entry input' required/>
        </div>
        <div className='form-div'>
            <label>Exit Price</label>
            <input value={exit} onChange={(e) => setExit(e.target.value)} type='number' className='exit input' required/>
        </div>

        <div className='form-div'>
            <input type='submit' onClick={(e) => handleSubmit(e)} className='submit input' value='Calculate' />
        </div>
    </form>
  )
}

export default CoinMPnL