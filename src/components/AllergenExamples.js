import React, { Component } from 'react'
import Ingredient from './Ingredient'
import MyItems from './MyItems'
import allergenExamples from '../utils/allergenExamples'
import { observer } from 'mobx-react'
import store from '../store'

const examples = Object.keys(allergenExamples)
@observer
class AllergenExamples extends Component {
  render () {
    const exampleChoices = examples.map((example, i) => {
      return <Ingredient
        content={example}
        picked={store.examples.includes(example)}
        toggleChosen={this.toggleChosen}
        index={i}
        key={i} />
    })
    return <div className='explecontainer'>
      <ul className='allergenExamples'>
        {exampleChoices}
      </ul>
    </div>
  }
}

export default AllergenExamples
