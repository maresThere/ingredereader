import React, { Component } from 'react'
import Ingredient from './Ingredient'
import MyItems from './MyItems'
import allergens from '../allergens'
import { observer } from 'mobx-react'
import store from '../store'

const ingredients = Object.keys(allergens)
@observer
class Ingredients extends Component {
  toggleChosen = (ingredient) => {
    const index = store.ingredients.indexOf(ingredient)

    if (index >= 0) {
      // It was in the list, so remove it
      store.ingredients.splice(index, 1)
    } else {
      // It wasn't, so add it
      if (store.ingredients.length < 3) {
        store.ingredients.push(ingredient)
      }
    }
  }
  // _click = () => {
  //   this.setState({
  //     myIngredients: []
  //   })
  // }

  render () {
    const ingredientChoices = ingredients.map((ingredient, i) => {
      return <Ingredient
        content={ingredient}
        picked={store.ingredients.includes(ingredient)}
        toggleChosen={this.toggleChosen}
        index={i}
        key={i} />
    })
    return <div className='ingcontainer'>
      <div className='allIngContainer'>
        <ul className='Ingredients'>
          {ingredientChoices}
        </ul>
      </div>
      <p>MY SEARCH INGREDIENTS:</p>
      <MyItems items={store.ingredients} />
      {/* <button onClick{this._click}>reset</button> */}
    </div>
  }
}

export default Ingredients
