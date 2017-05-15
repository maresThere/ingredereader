import { observable } from 'mobx'

class Store {
   @observable newUser = null
}

const store = new Store()

export default store
