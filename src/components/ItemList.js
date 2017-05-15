import React from 'react'

const ItemList = () => {
  return <div className='ItemList'>
    <h1>Choose Item</h1>
    <div>LOGO IMAGE GOES HERE</div>
    <h2>Choose your primary search item</h2>
    <form>
      <div className='radio'>
        <label>
          <input type='radio' value='almonds' checked />
          Almonds
        </label>
      </div>
      <div className='radio'>
        <label>
          <input type='radio' value='peanuts' />
          Peanuts
        </label>
      </div>
      <div className='radio'>
        <label>
          <input type='radio' value='eggs' />
          Eggs
        </label>
      </div>
    </form>
    <p>you chose Almonds</p>
    <button>scan now</button>
    <button>add to my items</button>

  </div>
}
export default ItemList
