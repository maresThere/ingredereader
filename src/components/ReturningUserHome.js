import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const ReturningUserHome = () => {
  return <div className='ReturningUserHome'>
    <h1>USER NAME'S</h1>
    <Link to='/welcome'><img src={logo} alt='' /></Link>
    <p>reference default search item</p>
    <button>Scan</button>
  </div>
}
export default ReturningUserHome
