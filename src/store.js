import { observable, autorun } from 'mobx'

class Store {
   @observable newUser = null
   @observable ingredients = JSON.parse(window.localStorage.getItem('ingredients')) || []

  constructor () {
    autorun(() => {
      window.localStorage.setItem('ingredients', JSON.stringify(this.ingredients))
    })
  }
}

const store = new Store()

export default store
