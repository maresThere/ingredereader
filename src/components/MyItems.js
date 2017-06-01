import React from 'react'

const MyItems = ({ items }) => {
  return <div className='MyItems'>

    <ul className='myList'>
      {items.map((item, i) => {
        return <li className={`mine chosen ${item}`} key={i} />
      })}
    </ul>
    <div className='content'> Includes these things thing</div>
    {/* <h4 className='codePointer'>TAP BARCODE BELOW TO SCAN</h4> */}
  </div>
}
export default MyItems
