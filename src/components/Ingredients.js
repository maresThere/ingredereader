import React, { Component } from 'react'

class Ingredients extends Component {
  render () {
    return <div className='Ingredients'>
      <div className='ingredient notChosen crustacean' />
      <div className='ingredient Chosen egg' />
      <div className='ingredient notChosen gluten' />
      <div className='ingredient Chosen mustard' />
      <div className='ingredient notChosen nuts' />
      <div className='ingredient notChosen sesame' />
    </div>
  }
}

export default Ingredients
