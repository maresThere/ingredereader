import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import logo from '../images/logo.png'
import auth from '../utils/auth'
import { observer } from 'mobx-react'

@observer
class NewUserHome extends Component {
  render () {
    if (!auth.isSignedIn) {
      return <div className='NewUserHome'>
        <h1 className='title'>Ingredereader</h1>
        <img src={logo} alt='' />
        <p className='intro'>A simple way to find an ingredient label by scanning the bar code</p>
        <div className='buttonBarn'>
          <button className='long' onClick={() => auth.signIn()}>sign in</button>
          {/* <button className='long'>sign up</button> */}
          <button className='long'><Link to='/choose'>Choose Ingredient</Link></button>
        </div>
      </div>
    } else {
      return <Redirect to='/choose' />
    }
  }
}
export default NewUserHome
