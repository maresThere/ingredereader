import React from 'react'
import Ingredients from './Ingredients'
import Header from './Header'

const Choose = () => {
  return <div className='Choose'>
    <Header />
    <h3>CHOOSE UP TO 3 INGREDIENTS:</h3>
    <Ingredients />
  </div>
}

export default Choose
