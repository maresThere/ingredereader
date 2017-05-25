import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SearchField extends Component {
  state = {
    query: ''
  }

  _change = (event) => {
    this.setState({ query: event.target.value }, () => this.redirect())
  }

  _submit = (event) => {
    event.preventDefault()
    this.redirect()
  }

  redirect () {
    const { query } = this.state
    const path = query.length > 0 ? `/search/${query}` : '/'
    this.props.history.replace(path)
  }

  render () {
    return <form action='#' onSubmit={this._submit} className='SearchField'>
      <input type='search' name='q' value={this.state.query} onChange={this._change} placeholder='Search' />
    </form>
  }
}

export default withRouter(SearchField)
