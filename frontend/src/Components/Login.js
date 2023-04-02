import React, { useState } from 'react'
import { useEffect } from "react";
import '../styles/home.css'
import image from '../images/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Actions/userActions';

const Login = ({history}) => {

  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = useSelector(state => state.userLogin)
  const {loading, success, userData} = userInfo

  const navigate = useNavigate();

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser({username, password}))

  }

  useEffect(
    () => {

      if(!loading){
        if(success){
          navigate('/dashboard')
          window.location.reload()
        }
      }

      const nav = document.querySelector('.nav-container')
      const foot = document.querySelector('.footer-container')
      const mob = document.querySelector('.nav-mobile-container')

      if(nav && foot){
        nav.style.display = 'none'
        foot.style.display = 'none'
        mob.style.display = 'none'
      }


    }


  ,[userData, success, loading])

  return (

    <div className="login-container">
  <div className="left">
    <div className="title">Sign In</div>
    <div className="signup">
      Or <Link to="/register">Create An Account</Link>{" "}
    </div>
    <div className="form-container">
      <form>
        <div className="field user">
          <label>Username</label>
          <input value={username} onChange={(e) => setUserName(e.target.value)} type="text" className="username" />
        </div>
        <div className="field pass">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="password" />
        </div>
        <div className="extra">
          <div className="checkbox">
            <input type="checkbox" className="check" defaultChecked={true}/>
            <label>Remember me</label>
          </div>
          <a className="forgot" href="/forgot-password">
            Forgot Password?
          </a>
        </div>
        <div className="btn-submit">
          <input type="submit" onClick={(e) => handleSubmit(e)} defaultValue="Sign in" className="submit" />
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

export default Login