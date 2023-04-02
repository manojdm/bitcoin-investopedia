import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/form.css'

const Success = () => {

    const navigate = useNavigate()

    const handleRedirect = (e) => {
        e.preventDefault()

        navigate('/',{replace: false})
    }

  return (
    <div className="container-success">
        <div className="card">
            <div className="title">
            <p>Entry Successfully added!! 😃</p>
            </div>
            <div className="message">
            <p className="nft">
                Thank you for filling out the survey. Please start checking your mail's
                inbox for NFT with detailed instructions as a part of small token of
                gratitude.
            </p>
            </div>
            <div className="button-container">
            <input type="submit" onClick={handleRedirect} value="Take me back to home" />
            </div>
        </div>
    </div>

  )
}

export default Success