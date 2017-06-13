import React, { Component } from 'react'
import Ingredient from './Ingredient'
import MyItems from './MyItems'
import allergenExamples from '../utils/allergenExamples'
import { observer } from 'mobx-react'
import store from '../store'

const examples = Object.keys(allergenExamples)
@observer
class AllergenExamples extends Component {
  toggleChosen = (example) => {
    const index = store.examples.indexOf(example)

    if (index >= 0) {
      // It was in the list, so remove it
      store.examples.splice(index, 1)
    } else {
      // It wasn't, so add it
      if (store.examples.length < 3) {
        store.examples.push(example)
      }
    }
  }

  render () {
    const exampleChoices = examples.map((example, i) => {
      return <Ingredient
        content={example}
        picked={store.examples.includes(example)}
        toggleChosen={this.toggleChosen}
        index={i}
        key={i} />
    })
    return <div className='ingcontainer'>
      <div className='allIngContainer'>
        <ul className='allergenExamples'>
          {exampleChoices}
        </ul>
      </div>
      <p>MY SEARCH INGREDIENTS:</p>
      <MyItems items={store.examples} />
    </div>
  }
}

export default AllergenExamples
