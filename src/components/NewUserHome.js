import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'
import logo from '../images/logo.png'

@observer
class NewUserHome extends Component {
  render () {
    if (!store.newUser) {
      return <div className='NewUserHome'>
        <h1 className='title'>Ingredereader</h1>
        <img src={logo} alt='' />
        <p>A simple way to read an ingredient label by scanning the bar code</p>
        <div className='buttonBarn'>
          <button className='short1'>sign in</button>
          <button className='short2'>sign up</button>
          <button className='long'><Link to='/choose'>Choose Ingredient</Link></button>
        </div>
      </div>
    } else {
      return <Redirect to='/my_list' />
    }
  }
}
export default NewUserHome
