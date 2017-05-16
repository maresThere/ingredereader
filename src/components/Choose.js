import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Choose = () => {
  return <div className='Choose'>
    <h1>Choose INGREDIENT</h1>
    <Link to='/welcome'><img src={logo} alt='' className='Logo' /></Link>
    <h3>Choose ingredient to search</h3>
    <form>
      <div className='radio'>
        <label>
          <input type='radio' value='almonds' checked />
          Almonds
        </label>
      </div>
      <div className='radio'><label><input type='radio' value='peanuts' />Peanuts</label></div>
      <div className='radio'><label><input type='radio' value='eggs' />Eggs</label></div>
    </form>
    <p>you chose Almonds</p>
    <button className='long'>scan now</button>
    <button className='long'><Link to='/my_list'>add to my ingredients</Link></button>
  </div>
}

export default Choose
