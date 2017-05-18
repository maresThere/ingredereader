import React from 'react'
import { Link } from 'react-router-dom'
import Ingredients from './Ingredients'
import logo from '../images/logo.png'

const Choose = () => {
  return <div className='Choose'>
    <Link to='/welcome'><img src={logo} alt='' className='Logo' /></Link>
    <h3>Choose up to 3 ingredients</h3>
    <Ingredients />

    {/* <button className='long'>scan now</button> */}
    {/* <button className='long'><Link to='/my_list'>add to my ingredients</Link></button> */}
  </div>
}

export default Choose
