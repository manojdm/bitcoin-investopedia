import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../Actions/userActions'
import image from '../images/login.png'

const Register = () => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [email, setEmail] = useState('')
  const [agree, setAgree] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userData = useSelector(state => state.userLogin)
  const {loading, success} = userData

  const handleRegister = (e) => {
    e.preventDefault()
  
    if(agree && password == confirm){
      dispatch(registerUser({username, password, email}))
    }
  }

  useEffect(
      () => {

        if(!loading){
          if(success){
            console.log('working')
            navigate('/login')
          }
        }

        // const nav = document.querySelector('.nav-container')
        // const foot = document.querySelector('.footer-container')
        // const mob = document.querySelector('.nav-mobile-container')
  
        // if(nav && foot){
        //   nav.style.display = 'none'
        //   foot.style.display = 'none'
        //   mob.style.display = 'none'
  
        // }
      }
    ,[loading, success])

  return (
<div className="login-container">
  <div className="left">
    <div className="title">Sign Up</div>
    <div className="signup">
      Or <Link to="/login">Already have Account</Link>{" "}
    </div>
    <div className="form-container">
      <form>
        <div className="field user">
          <label>Username<span>*</span></label>
          <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" className="username" />
        </div>
        <div className="field ema">
          <label>email id<span>*</span></label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="email" />
        </div>
        <div className="field pass">
          <label>Password<span>*</span></label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="password" />
        </div>
        <div className="field confp">
          <label>Confirm Password<span>*</span></label>
          <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" className="confirm" />
        </div>
        <div className="extra">
          <div className="checkbox">
            <input checked={agree} onChange={(e) => !agree ? setAgree(true) : setAgree(false)} type="checkbox" className="check" />
            <label> I agree to terms &amp; conditions</label>
          </div>
        </div>
        <div className="btn-submit">
          <input onClick={(e) => handleRegister(e)} type="submit" defaultValue="Sign Up" className="submit" />
        </div>
      </form>
    </div>
  </div>
  <div className="right">
    <div className="title">Bitcoin Investopedia</div>
    <div className="body">Know everything to start with Cryptocurrencies</div>
    <div className="image">
      <img src={image} alt="Login image" />
    </div>
  </div>
</div>

    )
}

export default Register