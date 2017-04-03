import React from 'react'
import Component from './Component'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class Page extends Component {
    get componentClassName() {return `container-fluid page`}
    children = () => this.props.children
    modal = () => this.props.modal
    render = () => <MuiThemeProvider><div className={this.className}>
        {this.children()}
        {this.modal()}
    </div></MuiThemeProvider>
}
