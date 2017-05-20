import React, { Component } from 'react'
import Ingredient from './Ingredient'
import MyItems from './MyItems'

const ingredients = ['crustacean', 'egg', 'fish', 'gluten', 'milk', 'mustard', 'nuts', 'peanuts', 'sesame', 'shellfish', 'soy']

class Ingredients extends Component {
  state = {
    myIngredients: []
  }

  toggleChosen = (ingredient) => {
    const ingredients = this.state.myIngredients.slice()
    const index = ingredients.indexOf(ingredient)

    if (index >= 0) {
      // It was in the list, so remove it
      ingredients.splice(index, 1)
    } else {
      // It wasn't, so add it
      if (this.state.myIngredients.length < 3) {
        ingredients.push(ingredient)
      }
    }
    this.setState({
      myIngredients: ingredients
    })
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
        picked={this.state.myIngredients.includes(ingredient)}
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
      <p >MY SEARCH INGREDIENTS:</p>
      <MyItems items={this.state.myIngredients} />
      {/* <button onClick{this._click}>reset</button> */}
    </div>
  }
}

export default Ingredients
