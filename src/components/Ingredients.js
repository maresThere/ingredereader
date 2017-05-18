import React, { Component } from 'react'
import Ingredient from './Ingredient'

const ingredients = ['crustacean', 'egg', 'gluten', 'mustard', 'nuts', 'sesame']

class Ingredients extends Component {
  state = {
    myIngredients: ['sesame', 'mustard']
  }

  toggleChosen = (ingredient) => {
    const ingredients = this.state.myIngredients.slice()
    const index = ingredients.indexOf(ingredient)

    if (index >= 0) {
      // It was in the list, so remove it
      ingredients.splice(index, 1)
    } else {
      // It wasn't, so add it
      ingredients.push(ingredient)
    }
    this.setState({
      myIngredients: ingredients
    })
  }

  render () {
    const ingredientChoices = ingredients.map((ingredient, i) => {
      return <Ingredient
        content={ingredient}
        picked={this.state.myIngredients.includes(ingredient)}
        toggleChosen={this.toggleChosen}
        index={i}
        key={i} />
    })
    return <ul className='Ingredients'>
      {ingredientChoices}
    </ul>
  }
}

export default Ingredients
