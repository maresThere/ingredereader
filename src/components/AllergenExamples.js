import React, { Component } from 'react'
import Ingredient from './Ingredient'
import MyItems from './MyItems'
import allergenExamples from '../utils/allergenExamples'
import { observer } from 'mobx-react'
import store from '../store'

const examples = Object.keys(allergenExamples)
@observer
class AllergenExamples extends Component {
  toggleChosen = (ingredient) => {
    const index = store.examples.indexOf(ingredient)

    if (index >= 0) {
      // It was in the list, so remove it
      store.examples.splice(index, 1)
    } else {
      // It wasn't, so add it
      if (store.examples.length < 3) {
        store.examples.push(ingredient)
      }
    }
  }

  render () {
    const ingredientChoices = examples.map((ingredient, i) => {
      return <Ingredient
        content={ingredient}
        picked={store.examples.includes(ingredient)}
        toggleChosen={this.toggleChosen}
        index={i}
        key={i} />
    })
    return <div className='ingcontainer'>
      <div className='allIngContainer'>
        <ul className='allergenExamples'>
          {ingredientChoices}
        </ul>
      </div>
      <p>MY SEARCH INGREDIENTS:</p>
      <MyItems items={store.examples} />
    </div>
  }
}

export default AllergenExamples
