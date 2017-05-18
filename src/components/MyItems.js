import React from 'react'

const MyItems = ({ items }) => {
  return <div className='MyItems'>

    <ul className='myList'>
      {items.map((item, i) => {
        return <li className={`mine chosen ${item}`} key={i} />
      })}
    </ul>
  </div>
}
export default MyItems
