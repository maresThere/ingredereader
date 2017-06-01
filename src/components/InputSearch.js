import React, { Component } from 'react'

class InputSearch extends Component {
  _submit = () => {
    this.props.toggleChosen(this.props.content)
  }

  render () {
    return <div className='ctr'>
      {/* <h3>scan now or enter upc below</h3> */}

    </div>
  }
}

export default InputSearch
