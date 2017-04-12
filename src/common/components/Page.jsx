import React from 'react'
import Component from './Component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cyan500} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const customTheme = {
    palette: {
        primary1Color: '#32c8fe',
        accent1Color: '#123123',
        borderColor: '#cecece'
    }
}

export default class Page extends Component {
    get componentClassName() {return `container-fluid grey-box page ${this.pageClassName}`}
    get pageClassName() {return ''}
    children = () => this.props.children
    modal = () => this.props.modal
    render = () =>
        <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}><div className={this.className}>
            {this.children()}
            {this.modal()}
        </div></MuiThemeProvider>
}
