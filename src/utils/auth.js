import Auth0Lock from 'auth0-lock'
import { observable, autorun, computed } from 'mobx'

const CLIENT_ID = 'AtimBVE6lmEZlmK26wkg8A4a2NRMJOBf'
const CLIENT_DOMAIN = 'ingredereader.auth0.com'

class Auth {
  @observable token
  @observable profile

  constructor () {
    this.token = window.localStorage.getItem('auth:token')
    this.lock = new Auth0Lock(CLIENT_ID, CLIENT_DOMAIN)
    this.lock.on('authenticated', ({ idToken }) => {
      this.token = idToken
      this.lock.getProfile(idToken, (error, profile) => {
        if (error) {
          console.log(error)
        }
        this.profile = profile
        console.log(profile)
      })
    })

    autorun(() => {
      if (this.isSignedIn) {
        window.localStorage.setItem('auth:token', this.token)
      } else {
        window.localStorage.removeItem('auth:token')
      }
    })
  }
  signIn () {
    this.lock.show()
  }

  signOut () {
    this.token = null
  }

  @computed get isSignedIn () {
    return this.token
  }
}

const auth = new Auth()
export default auth
