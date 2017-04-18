import React from 'react'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {cyan500} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Style from './Style'
import Login from './Login'

injectTapEventPlugin()

export default class Page extends Style {
    get componentClassName() {return `container-fluid grey-box page ${this.pageClassName}`}
    get pageClassName() {return ''}
    children = () => this.props.children
    modal = () => this.props.modal
    render = () =>
        <MuiThemeProvider muiTheme={getMuiTheme(this.theme.materialTheme)}><div className={this.className}>
            {this.util.user.isLogged ? this.children() : <Login/>}
            {this.modal()}
        </div></MuiThemeProvider>
}
