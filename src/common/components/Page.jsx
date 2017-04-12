import React from 'react'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import {cyan500} from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Component from './Component'

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
