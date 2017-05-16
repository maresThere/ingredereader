import React from 'react'
import { Link } from 'react-router-dom'
import logoTiny from '../images/logoTiny.png'

const NotFound = () => {
  return <div className='NotFound'>
    <h1>INGREDIENT NOT FOUND</h1>
    <div className='pageHead'>
      <Link to='/my_list'><img src={logoTiny} alt='' className='tinyLogo' /></Link>
      <img src={logoTiny} alt='' className='defaultIng' />
    </div>
    <button className='long'>add to safe items</button>
    <button className='long'>add to NOT safe items</button>
    <button className='long'>scan again</button>
    <button className='long'><Link to='/choose'>choose new ingredient</Link></button>

  </div>
}
export default NotFound
