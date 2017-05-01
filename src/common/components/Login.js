import React from 'react'
import {Connect} from '../redux'
import Style from './Style'
import TextField from './TextField'
import Button from './Button'

class Login extends Style {
    componentClassName = 'login'
    validate = () => {
        if (!this.accountInput.value) {
            return this.setError('account', 'This field is required')
        }
        else {
            this.removeError('account')
        }
        if (!this.passwordInput.value) {
            return this.setError('password', 'This field is required')
        }
        else {
            this.removeError('password')
        }
        return true
    }
    onLogin = (e) => {
        if (this.validate()) {
            this.props.executeUserLoginAction({
                account: this.accountInput.value,
                password: this.passwordInput.value
            })
        }
    }
    render = () =>
      <div className={this.className}>
          <h1>Sign in to <span className='app'>{this.configuration.app}</span></h1>
          <form className='login-form'>
              <TextField type='text' ref={e => this.accountInput = e}
                  errorText={this.state.validationErrors.account}
                  placeholder='Account'/>
              <TextField type='password' ref={e => this.passwordInput = e}
                  errorText={this.state.validationErrors.password}
                  placeholder='Password'/>
              <Button label='Login' onClick={this.onLogin}/>
          </form>
      </div>
}
export default (new Connect(Login)).klass
