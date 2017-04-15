import React from 'react'
import {TextField, RaisedButton} from 'material-ui'
import {Connect} from '../redux'
import Page from './Page'

class LoginPage extends Page {
    get pageClassName() {return `login-page`}
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
    children = () => <form className='login-form'>
        <h1>Sign in to {this.props.pageInfo.appname ? this.props.pageInfo.appname : configuration.appname}</h1>
        <TextField type='text' ref={e => this.accountInput = e}
            errorText={this.state.validationErrors.account}
            hintText='Account' fullWidth={true} />
        <TextField type='password' ref={e => this.passwordInput = e}  style={{marginTop: 12, marginBottom: 12}}
            errorText={this.state.validationErrors.password}
            hintText='Password' fullWidth={true} />
        <RaisedButton label='Login' primary={true} fullWidth={true} onClick={this.onLogin}/>
    </form>
}
export default (new Connect(LoginPage)).klass
