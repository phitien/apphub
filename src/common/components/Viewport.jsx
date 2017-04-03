import React from 'react'
import Component from './Component'
import LoginPage from './LoginPage'

class Viewport extends Component {
    get componentClassName() {return 'viewport container-fluid'}
    children = () => this.util.user.isLogged ? this.props.children : <LoginPage />
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}
export default Viewport
