import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import '../styles/home.css'

const Header = () => {

  const btn = useRef(null)
  const ele = useRef(null)

  const location = useLocation()
  const {pathname} = location

  const {userData} = useSelector(state => state.userLogin)
  let path = window.location.pathname

  const controlNav = () => {

    console.log(btn.current.classList)

    if(!btn.current.classList.contains('open')){
      btn.current.classList.add('open')
      ele.current.style.display='block'
      ele.current.style.width='fit-content'
    } else {
      btn.current.classList.remove('open')
      ele.current.style.display='none'
    }    

  }

  useEffect(() => {
    console.log(location)
  }, [location, pathname]);


  return ((pathname != '/login' || pathname != '/register') &&
    <>
    <div className="nav-container">
    <div className="nav-title">
      <div className="logo">
        <Link to='/'><i className="fa-brands fa-bitcoin" /></Link>
      </div>
      <div className="title">
        <span>Bitcoin</span> <span>Investopedia</span>
      </div>
    </div>
    <div className="nav-menu">
      <ul>
        <Link className={window.location.pathname == '/' && 'active'} to='/'><li>Home</li></Link>
        {!userData && <Link to='/login'><li>Sign In</li></Link>}
        {!userData && <Link to='/register'><li>Sign Up</li></Link>}
        {userData && <Link to='/chatbot'><li>Chatbot</li></Link>}
        <Link to='/results'><li>Survey results</li></Link>
        <Link to='/market'><li>Market Prediction</li></Link>
      </ul>
    </div>
  </div>
  <div className="nav-mobile-container">
    <div className="nav-title">
      <div className="logo">
        <i className="fa-brands fa-bitcoin" />
      </div>
    </div>
    <div onClick={controlNav} ref={btn} className="nav-icon">
      <p className="line l1" />
      <p className="line l2" />
      <p className="line l3" />
    </div>
  </div>
  <div ref={ele} className="mobile-menus">
    <div className="title">
      <div className="logo">
        <i className="fa-brands fa-bitcoin" />
      </div>
      <div className="name">
        <span>Bitcoin</span> <span>Investopedia</span>
      </div>
    </div>
    <div className="menus">
      <ul>
        {!userData && <Link to='/login'><li>Sign In</li></Link>}
        {!userData && <Link to='/register'><li>Sign Up</li></Link>}
        {userData && <Link to='/chatbot'><li>Chatbot</li></Link>}
         <Link to='/form'><li>Survey Form</li></Link>
        <Link to='/market'><li>Market Prediction</li></Link>
      </ul>
    </div>
    <div className="items copyright">© Bitcoin Investopedia, 2022</div>
  </div>
  </>
    )
}

export default Header