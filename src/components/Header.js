import React from 'react'
import auth from '../utils/auth'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
  return <div className='Header'>
    <Link to='/'><img src={logo} alt='Ingredereader Logo' className='Logo' /></Link>
    <div className='profile'>
      {/* <h4>{auth.profile.given_name}</h4>
      <img src={auth.profile.picture} className='profilePic' /> */}
    </div>
  </div>
}

export default Header
