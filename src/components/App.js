import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewUserHome from './NewUserHome'
import ReturningUserHome from './ReturningUserHome'
import ItemList from './ItemList'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={NewUserHome} />
          <Route path='/welcome' component={ReturningUserHome} />
          <Route path='/choose_item' component={ItemList} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
