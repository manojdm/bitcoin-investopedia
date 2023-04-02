import React, { useState } from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const UsdTarget = (e) => {

    const [leverage, setLeverage] = useState(0)
    const [entry, setEntry] = useState(0)
    const [roe, setROE] = useState(0)
    const [type, setType] = useState('long')

    const handleSubmit = (x) => {

        x.preventDefault()

        if(roe != 0 && leverage !=0 && entry != 0){
            let target
            if(type == 'long'){
                target = entry * ((roe/100)/leverage+1)
            } else {
                target = entry * (1-(roe/100)/leverage)
            }

            target = target.toFixed(2)

            const message = createChatBotMessage('Results of your calculations are: ',{
                widget: 'results'
            })
    
            e.setState((prev) => ({
                ...prev,
                results: {
                    'Target Price': target
                },
                messages: [...prev.messages, message]
            }))
        } else {
            alert('Please fill all the fields')
        }


    
    }

    return (
        <form className='form pnl'>
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
                <label>leverage (x)</label>
                <input value={leverage} onChange={(e) => setLeverage(e.target.value)} type='number' className='leverage input' required/>
            </div>

            <div className='form-div'>
                <label>Entry Price</label>
                <input value={entry} onChange={(e) => setEntry(e.target.value)} type='number' className='entry input' required/>
            </div>
            <div className='form-div'>
                <label>ROE (%)</label>
                <input value={roe} onChange={(e) => setROE(e.target.value)} type='number' className='roe input' required/>
            </div>

            <div className='form-div'>
                <input type='submit' onClick={(e) => handleSubmit(e)} className='submit input' value='Calculate' />
            </div>
        </form>
  )
}

export default UsdTarget