import React from 'react'
import {TextField, RaisedButton} from 'material-ui'
import {Connect} from '../redux'
import Style from './Style'

class Login extends Style {
    get componentClassName() {return `container-fluid grey-box page login-page`}
    validate = () => {
        if (!this.accountInput.getValue()) {
            return this.setError('account', 'This field is required')
        }
        else {
            this.removeError('account')
        }
        if (!this.passwordInput.getValue()) {
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
                account: this.accountInput.getValue(),
                password: this.passwordInput.getValue()
            })
        }
    }
    render = () =>
      <div className={this.className}>
        <form className='login-form'>
            <h1>Sign in to {this.configuration.app}</h1>
            <TextField type='text' ref={e => this.accountInput = e}
                errorText={this.state.validationErrors.account}
                hintText='Account' fullWidth={true} />
            <TextField type='password' ref={e => this.passwordInput = e}  style={{marginTop: 12, marginBottom: 12}}
                errorText={this.state.validationErrors.password}
                hintText='Password' fullWidth={true} />
            <RaisedButton label='Login' primary={true} fullWidth={true} onClick={this.onLogin}/>
        </form>
      </div>
}
export default (new Connect(Login)).klass
