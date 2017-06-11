import React from 'react'
// import MyExamples from './MyExamples'
const MyItems = ({ items }) => {
  return <div className='MyItems'>

    <ul className='myList'>
      {items.map((item, i) => {
        return <li className={`mine chosen ${item}`} key={i} />
      })}
    </ul>
    {/* <MyExamples expls={store.ingredients} /> */}
  </div>
}
export default MyItems
