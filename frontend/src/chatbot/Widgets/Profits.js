import React, { useState } from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'

const Profits = (e) => {

    const [investment, setInvestment] = useState(0)
    const [entry, setEntry] = useState(0)
    const [exit, setExit] = useState(0)
    const [entryTax, setEntryTax] = useState(0.1)
    const [exitTax, setExitTax] = useState(0.1)

    const handleSubmit = (x) => {
        x.preventDefault()
        if(investment != 0 || entry != 0 || exit != 0){
            const netEntry = entry - (entry * Math.pow(entryTax,2).toFixed(2))
            const netExit = exit - (exit * Math.pow(exitTax,2).toFixed(2))

            // main results
            const profit = (investment * (netExit - netEntry)).toFixed(2)
            const roi = ((profit/(entry*investment)) * 100).toFixed(2)

            const message = createChatBotMessage('Results of your calculations are: ',{
                widget: 'results'
            })

            e.setState((prev) => ({
                ...prev,
                results: {
                    profit,
                    roi
                },
                messages: [...prev.messages, message]
            }))
        } else {
            alert('Please fill all the entries')
        }
    }

  return (
    <form className='form spot'>
        <div className='form-div'>
            <label>Coins purchased</label>
            <input value={investment} onChange={(e) => setInvestment(e.target.value)} type='number' className='investment input' required/>
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
            <label>Entry Fees (%)</label>
            <input value={entryTax} onChange={(e) => setEntryTax(e.target.value)} type='number' className='exit input' required/>
        </div>
        <div className='form-div'>
            <label>Exit Price (%)</label>
            <input value={exitTax} onChange={(e) => setExitTax(e.target.value)} type='number' className='exit input' required/>
        </div>
        <div className='form-div'>
            <input type='submit' onClick={(e) => handleSubmit(e)} className='submit input' value='Calculate' />
        </div>
    </form>
  )
}

export default Profits