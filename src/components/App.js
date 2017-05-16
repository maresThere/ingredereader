import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewUserHome from './NewUserHome'
import ReturningUserHome from './ReturningUserHome'
import Choose from './Choose'
import MyItems from './MyItems'
import FoundIng from './FoundIng'
import NotFound from './NotFound'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={NewUserHome} />
          <Route path='/welcome' component={ReturningUserHome} />
          <Route path='/choose' component={Choose} />
          <Route path='/my_list' component={MyItems} />
          <Route path='/found' component={FoundIng} />
          <Route path='/not_found' component={NotFound} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
