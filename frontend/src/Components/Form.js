import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = function () {

    const [email,setEmail] = useState('')
    const [happy,setHappy] = useState('no')
    const [total,setTotal] = useState(0)
    const [roi, setROI] = useState(0)
    const [future,setFuture] = useState('no')

    const navigate = useNavigate()

    const browser = {
        appName: window.navigator.appCodeName,
        platform: window.navigator.platform,
        vendor: window.navigator.vendor,
        language: window.navigator.language
    }

    useEffect(() => {

        if(localStorage.getItem('entry')){
            navigate('/success')
        }

    },[])


    const handleSubmit = async (e) => {

        e.preventDefault()

        const data = {email,happy,total,roi,future,browser}

        const result = await axios.post('http://localhost:8800/form/new',data,{
            headers: {'Content-Type':'application/json'}
        })

        localStorage.setItem('entry',JSON.stringify(data))

        navigate('/success',{replace: true})

    }


  return (
        <div className="container">
            <div className="form-container">
            <div className="title">
                <i className="fa-brands fa-bitcoin" />
                Bitcoin Investopedia
            </div>
            <div className="note">
                <p>Note:</p>
                <ul>
                <li>
                    The survey isn't conducted by any organisation/company and is
                    non-profitable
                </li>
                <li>We don't intend/trying to spread any kind of hate/violence</li>
                <li>
                    The survey is purely conducted to analyse the emotions of crypto
                    traders after taxation
                </li>
                <li>
                    It's an anonymous survey and emails are being collected to send free
                    NFT's as token of gratitude
                </li>
                <li>Distribution of NFT's starts from 15th October</li>
                <li>Please mail to support@bitcoininvestopedia.com for any queries</li>
                </ul>
            </div>
            {/* <hr> */}
            <div className="form">
                <form action="">
                <div className="email-cont">
                    <label className="label" htmlFor="email">
                    Email<span>*</span>
                    </label>
                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="email" required="" />
                </div>
                <div className="happy-cont">
                    <label onChange={(e) => console.log(e.target.value)} className="label" htmlFor="happy">
                    Are you happy with the taxation ?<span>*</span>
                    </label>
                    <input
                    type="radio"
                    name="happy"
                    value='yes'
                    checked = {happy === 'yes'}
                    onChange={(e) => e.target.value == 'yes' && setHappy('yes')}
                    className="happy"
                    defaultValue="yes"
                    />
                    <label htmlFor="happy">Yes</label>
                    <input
                    type="radio"
                    name="happy"
                    value='no'
                    checked = {happy === 'no'}
                    onChange={(e) => e.target.value == 'no' && setHappy('no')}
                    className="happy"
                    defaultValue="no"
                    />
                    <label htmlFor="happy">No</label>
                </div>
                <div className="total-cont">
                    <label className="label">
                    Total Investments Till Date<span>*</span>
                    </label>
                    <input
                    type="number"
                    name="total"
                    value={total}
                    onChange={(e) => parseInt(setTotal(e.target.value))}
                    className="total"
                    min={100}
                    defaultValue="yes"
                    required=""
                    />
                </div>
                <div className="return-cont">
                    <label className="label" htmlFor="total">
                    Total ROI %{" "}
                    <span className="extra">
                        (Please use "-" sign to indicate losses)
                    </span>
                    <span>*</span>
                    </label>
                    <input
                    type="number"
                    name="return"
                    min={-100}
                    value={roi}
                    onChange={(e) => parseInt(setROI(e.target.value))}
                    className="return"
                    required="" />
                </div>
                <div className="future-cont">
                    <label className="label" htmlFor="future">
                    Are you still trading ?<span>*</span>
                    </label>
                    <input
                    type="radio"
                    name="future"
                    checked = {future === 'yes'}
                    onChange={(e) => e.target.value == 'yes' && setFuture('yes')}
                    className="future"
                    value="yes"
                    />
                    <label htmlFor="future">Yes</label>
                    <input
                    type="radio"
                    name="future"
                    className="future"
                    value="no"
                    checked = {future === 'no'}
                    onChange={(e) => e.target.value == 'no' && setHappy('no')}
                    />
                    <label htmlFor="future">No</label>
                </div>
                <div className="submit-btn">
                    <input onClick={handleSubmit} type="submit" defaultValue="Submit" required="" />
                </div>
                </form>
            </div>
            </div>
            <div className="empty" />
        </div>
  
    )
}

export default Form