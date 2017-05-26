import { observable } from 'mobx'

class Store {
   @observable newUser = null
   @observable ingredients = []
}

const store = new Store()

export default store
