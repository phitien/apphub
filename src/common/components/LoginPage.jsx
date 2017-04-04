import React from 'react'
import Page from './Page'
import {TextField, RaisedButton} from 'material-ui'

export default class LoginPage extends Page {
    get pageClassName() {return `login-page`}
    children = () => <form className='login-form'>
        <h1>Sign in</h1>
        <TextField type='text' hintText='User account' fullWidth={true}/>
        <TextField type='password' hintText='Password' fullWidth={true} style={{marginTop: 12, marginBottom: 12}}/>
        <RaisedButton label="Login" primary={true} fullWidth={true}/>
    </form>
}
