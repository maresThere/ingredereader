import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewUserHome from './NewUserHome'
import ReturningUserHome from './ReturningUserHome'
import Choose from './Choose'
import MyItems from './MyItems'
import FoundIng from './FoundIng'
import NotFound from './NotFound'
import Scanner from './Scanner'

// import { NewUserHome, ReturningUserHome, Choose, MyItems, FoundIng, NotFound, Scanner } from '.'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <main>
          <Switch>
            <Route exact path='/' component={NewUserHome} />
            <Route path='/welcome' component={ReturningUserHome} />
            <Route path='/choose' component={Choose} />
            <Route path='/my_list' component={MyItems} />
            <Route path='/scanner' component={Scanner} />
            <Route path='/found' component={FoundIng} />
            <Route path='/not_found' component={NotFound} />
          </Switch>
        </main>
        <footer>
          <Link to='/'><i className='fa fa-home fa-2x' aria-hidden='true' /></Link>
          <Link to='/scanner'><i className='fa fa-barcode fa-2x' aria-hidden='true' /></Link>
          <i className='fa fa-folder fa-2x' aria-hidden='true' />
        </footer>

      </div>
    </Router>
  }
}

export default App
