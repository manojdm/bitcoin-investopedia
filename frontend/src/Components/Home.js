import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/style.css'

const Home = () => {

    const navigate = useNavigate()

    const handleRedirect = (e) => {
        e.preventDefault()

        navigate('/form',{replace: false})
    }

  return (
    <div className="container-success">
        <div className="card">
            <div className="title">
            <p>Project under Development <i class="fa-solid fa-gear"></i></p>
            </div>
            <div className="message">
            <p className="nft">
                Our project is under Development, Please visit us after few days. In the meanwhile, you can help us out by taking up our survey on decision of Indian Government's taxation on crypto. 
            </p>
            </div>
            <div className="button-container">
            <input type="submit" onClick={handleRedirect} value="Take me to form" />
            </div>
        </div>
    </div>

  )
}

export default Home