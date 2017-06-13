import React from 'react'
import auth from '../utils/auth'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Header = () => {
  return <div className='Header'>
    <div className='headerContainer'>
      <img src={auth.profile.picture} className='profilePic' />
      <h3>{auth.profile.given_name}</h3>
      <Link to='/'><img src={logo} alt='Ingredereader Logo' className='Logo' /></Link>
    </div>
  </div>
}

export default Header
