import React from 'react'
import Style from './Style'
import LoginPage from './LoginPage'

class Viewport extends Style {
    get componentClassName() {return 'viewport container-fluid'}
    children = () => this.util.user.isLogged ? this.props.children : <LoginPage />
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}
export default Viewport
