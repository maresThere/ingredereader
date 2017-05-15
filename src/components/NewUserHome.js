import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import store from '../store'

@observer
class NewUserHome extends Component {
  render () {
    if (!store.newUser) {
      return <div className='NewUserHome'>
        <h1>Ingredereader</h1>
        <div>IMAGE GOES HERE</div>
        <p>A simple way to read an ingredient label by scanning the bar code</p>
        <button>sign in</button>
        <button>sign up</button>
        <button>choose item to scan</button>
      </div>
    } else {
      return <Redirect to='/welcome' />
    }
  }
}
export default NewUserHome
