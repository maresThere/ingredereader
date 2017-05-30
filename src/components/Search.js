import React, { Component } from 'react'
import { get } from '../api'
import Ingredients from './Ingredients'
import allergens from '../allergens'
import store from '../store'

class Search extends Component {
  state = {
    live: false,
    results: null
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.query !== nextProps.query) {
      if (this.state.live) {
        get(nextProps.query).then(result => {
          this.setState({ result })
          console.log(result)
        })
      } else {
        this.setState({
          result: {
            'old_api_id': null,
            'item_id': '51c53cf497c3e6efadd59bf0',
            'item_name': 'BelVita Breakfast Biscuits, Cinnamon Brown Sugar',
            'leg_loc_id': null,
            'brand_id': '51db37ba176fe9790a898c86',
            'brand_name': 'Nabisco',
            'item_description': 'Cinnamon Brown Sugar',
            'updated_at': '2016-11-26T07:10:24.000Z',
            'nf_ingredient_statement': 'Whole Grain Blend (Rolled Oats, Rye Flakes), Enriched Flour [Wheat Flour, Niacin, Reduced Iron, Thiamin Mononitrate (Vitamin B1), Riboflavin (Vitamin B2), Folic Acid], High Oleic Canola Oil, Sugar, Brown Sugar, Whole Grain Wheat Flour, Malt Syrup (from Corn And Barley), Invert Sugar, Baking Soda, Salt, Soy Lecithin, Disodium Pyrophosphate, Cinnamon, Datem, Ferric Orthophosphate (Iron), Niacinamide, Molasses, Pyridoxine Hydrochloride (Vitamin B6), Riboflavin (Vitamin B2), Thiamin Mononitrate (Vitamin B1).',
            'nf_water_grams': null,
            'nf_calories': 230,
            'nf_calories_from_fat': 70,
            'nf_total_fat': 8,
            'nf_saturated_fat': 0.5,
            'nf_trans_fatty_acid': 0,
            'nf_polyunsaturated_fat': 2.5,
            'nf_monounsaturated_fat': 4.5,
            'nf_cholesterol': 0,
            'nf_sodium': 220,
            'nf_total_carbohydrate': 35,
            'nf_dietary_fiber': 3,
            'nf_sugars': 10,
            'nf_protein': 4,
            'nf_vitamin_a_dv': 0,
            'nf_vitamin_c_dv': 0,
            'nf_calcium_dv': 0,
            'nf_iron_dv': 10,
            'nf_refuse_pct': null,
            'nf_servings_per_container': 1,
            'nf_serving_size_qty': 4,
            'nf_serving_size_unit': 'biscuits',
            'nf_serving_weight_grams': 50,
            'allergen_contains_milk': null,
            'allergen_contains_eggs': null,
            'allergen_contains_fish': null,
            'allergen_contains_shellfish': null,
            'allergen_contains_tree_nuts': null,
            'allergen_contains_peanuts': null,
            'allergen_contains_wheat': null,
            'allergen_contains_soybeans': null,
            'allergen_contains_gluten': null,
            'usda_fields': null
          }
        })
      }
    }
  }

  render () {
    const { result } = this.state
    if (result) {
      return <div className='Search'>
        <h3>{this.state.bestResult}</h3>
        <h2>{result.item_name}</h2>
        <IngredientList items={result.nf_ingredient_statement.split(' ')} />
      </div>
    } else {
      return <div className='Search'>
        <h2>Waiting for scan</h2>
      </div>
    }
  }
}

class IngredientList extends Component {
  render () {
    let found = false
    let bads = []
    store.ingredients.forEach((item) => {
      bads = [...bads, ...allergens[item]]
    })
    console.log(bads)
    return <div style={{ display: 'flex', flexDirection: 'column' }}>
      <p>{this.props.items.map((item, i) => {
        const matched = bads.some((allergen) => item.toLowerCase().includes(allergen.toLowerCase()))
        if (matched) {
          found = true
          return <span key={i} style={{ backgroundColor: 'darkslategray' }}> {item} </span>
        } else {
          return <span key={i}> {item} </span>
        }
      })}</p>
      <div className='eatOrDont'>
        {
          found
          ? <h2>- FOUND INGREDIENTS -</h2>
          : <h2>- NOTHING FOUND -</h2>
        }
      </div>
    </div>
  }
}

export default Search
