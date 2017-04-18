import cookie from './cookie'

export default class UserProfile {
    constructor() {
        this.loadFromCookie()
    }
    loadFromCookie = () => {
        this.data = cookie.read('user')
    }
    saveToCookie = () => {
        cookie.value('user', this.data)
    }
    load = (data) => {
        if (!data) this.unload()
        else {
          this.data = data
          this.saveToCookie()
        }
    }
    unload = () => {
        cookie.remove('user')
        this.data = null
    }
    update = (field, value) => {
        this.data[field] = value
        this.saveToCookie()
    }
    get isLogged() {return this.data ? true : false}
    get email() {return this.data.email}
    set email(v) {this.update('email', v)}
    get firstName() {return this.data.firstName}
    set firstName(v) {this.update('firstName', v)}
    get lastName() {return this.data.lastName}
    set lastName(v) {this.update('lastName', v)}
    get displayName() {return this.data.displayName}
    set displayName(v) {this.save('displayName', v)}
    get occupation() {return this.data.occupation}
    set occupation(v) {this.save('occupation', v)}
    get department() {return this.data.department}
    set department(v) {this.save('department', v)}
    get lastLogin() {return this.data.lastLogin}
    set lastLogin(v) {this.save('lastLogin', v)}
}
