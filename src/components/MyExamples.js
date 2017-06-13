import React from 'react'

const MyExamples = ({ expls }) => {
  return <div className='MyExamples'>

    <ul className='myExpls'>
      {expls.map((expl, i) => {
        return <li className={`mine chosen ${expl}`} key={i} />
      })}
    </ul>
  </div>
}
export default MyExamples
