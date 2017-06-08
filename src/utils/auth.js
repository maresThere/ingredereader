import Auth0Lock from 'auth0-lock'
import { observable } from 'mobx'

const CLIENT_ID = 'AtimBVE6lmEZlmK26wkg8A4a2NRMJOBf'
const CLIENT_DOMAIN = 'ingredereader.auth0.com'

class Auth {
  @observable token

  constructor () {
    this.lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN)
    this.lock.on('authenticated', ({ idToken }) => {
      this.token = idToken
    })
  }
  signIn () {
    this.lock.show()
  }

  get isSignedIn () {
    return this.token
  }
}

const auth = new Auth()
export default auth
