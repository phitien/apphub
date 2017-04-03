import React from 'react'
import Page from './Page'
import {TextField, RaisedButton} from 'react-form'

export default class LoginPage extends Page {
    get componentClassName() {return `container-fluid page login-page`}
    get children() {
        return <div className={this.className}>
            <form>
                <TextField hintText='User account' floatingLabelText='User account'/><br />
                <TextField hintText='Password' floatingLabelText='Password'/><br />
                <RaisedButton label="Primary" primary={true}/>
            </form>
        </div>
    }
}
