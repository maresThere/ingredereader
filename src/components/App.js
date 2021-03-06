import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewUserHome from './NewUserHome'
import Choose from './Choose'
import MyItems from './MyItems'
import Scanner from './Scanner'
import auth from '../utils/auth'

// import { NewUserHome, ReturningUserHome, Choose, MyItems, FoundIng, NotFound, Scanner } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={NewUserHome} />
            <Route path='/choose' component={Choose} />
            <Route path='/my_list' component={MyItems} />
            <Route path='/scanner' component={Scanner} />
          </Switch>
        </main>
        <footer>
          <Link to='/'><i className='fa fa-home fa-2x' aria-hidden='true' /></Link>
          <Link to='/scanner'><i className='fa fa-barcode fa-2x' aria-hidden='true' /></Link>
          <i className='fa fa-folder fa-2x' aria-hidden='true' />
          <Link to='/'><div onClick={() => auth.signOut()}><i className='fa fa-sign-out fa-2x' aria-hidden='true' /></div></Link>
        </footer>

      </div>
    </Router>
  }
}

export default App
