import React from 'react'
import { Link } from 'react-router-dom'
import logoTiny from '../images/logoTiny.png'

const MyItems = () => {
  return <div className='MyItems'>
    <h1>My list</h1>
    <div className='pageHead'>
      <Link to='/welcome'><img src={logoTiny} alt='' className='tinyLogo' /></Link>
      <img src={logoTiny} alt='' className='defaultIng' />
    </div>
    <h2>My Ingredereader Ingredients</h2>
    <ul className='myList'>
      <li>milk</li>
      <li>Peanuts</li>
      <li>Soy</li>
    </ul>
    <p>choose an ingredient to search?</p>
    <button className='long'>scan now</button>
    <button className='long'><Link to='/choose'>choose new ingredient</Link></button>

  </div>
}
export default MyItems
