import React, { Component } from 'react'
import cx from 'classnames'

class Ingredient extends Component {
  _click = () => {
    this.props.toggleChosen(this.props.content)
  }

  render () {
    return <li onClick={this._click} className={cx('ingredient', this.props.content, { chosen: this.props.picked })} />
  }
}

export default Ingredient
