import React from 'react'
import Page from './Page'
import {TextField, RaisedButton} from 'material-ui'

export default class LoginPage extends Page {
    get componentClassName() {return `container-fluid page login-page`}
    children = () => <form className='login-form'>
        <TextField type='text' hintText='User account' floatingLabelText='User account' fullWidth={true}/>
        <br/>
        <TextField type='password' hintText='Password' floatingLabelText='Password' fullWidth={true}/>
        <br/>
        <RaisedButton label="Login" primary={true} fullWidth={true}/>
    </form>
}
