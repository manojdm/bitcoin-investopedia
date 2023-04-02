import React, { useState } from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const Target = (e) => {
    const [investment, setInvestment] = useState(0)
    const [entry, setEntry] = useState(0)
    const [expected, setExpected] = useState(0)


    const handleSubmit = (x) => {
        x.preventDefault()
        if(investment != 0 || entry != 0 || expected != 0){

            const multiplier = 1 + (expected/(investment*entry))
            const targetPrice =  multiplier * entry

            const message = createChatBotMessage('Results of your calculations are: ',{
                widget: 'results'
            })

            e.setState((prev) => ({
                ...prev,
                results: {
                    'target price': targetPrice.toFixed(2)
                },
                messages: [...prev.messages, message]
            }))
        } else {
            alert('Please fill all the entries')
        }
    }

  return (
    <form className='form target'>
        <div className='form-div'>
            <label>Coins purchased</label>
            <input value={investment} onChange={(e) => setInvestment(e.target.value)} type='number' className='investment input' required/>
        </div>
        <div className='form-div'>
            <label>Entry Price</label>
            <input value={entry} onChange={(e) => setEntry(e.target.value)} type='number' className='entry input' required/>
        </div>
        <div className='form-div'>
            <label>Expected profits<br />(In Amount)</label>
            <input value={expected} onChange={(e) => setExpected(e.target.value)} type='number' className='expected input' required/>
        </div>

        <div className='form-div'>
            <input type='submit' onClick={(e) => handleSubmit(e)} className='submit input' value='Calculate' />
        </div>
    </form>  )
}

export default Target