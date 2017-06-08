import React from 'react'
import { Link } from 'react-router-dom'
import Ingredients from './Ingredients'
import logo from '../images/logo.png'

const Choose = () => {
  return <div className='Choose'>
    <Link to='/'><img src={logo} alt='Ingredereader Logo' className='Logo' /></Link>
    <h3>CHOOSE UP TO 3 INGREDIENTS</h3>
    <Ingredients />

    {/* <button className='long'>scan now</button> */}
    {/* <button className='long'><Link to='/my_list'>add to my ingredients</Link></button> */}
  </div>
}

export default Choose
