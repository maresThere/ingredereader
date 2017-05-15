import React from 'react'

const MyItems = () => {
  return <div className='MyItems'>
    <h1>Choose Item</h1>
    <div>LOGO IMAGE GOES HERE</div>
    <h2>My Ingredereader Items</h2>
    <ul className='myList'>
      <li>milk</li>
      <li>Peanuts</li>
      <li>Soy</li>
    </ul>
    <p>choose an item to search?</p>
    <button>scan now</button>
    <button>add to my items</button>

  </div>
}
export default MyItems
