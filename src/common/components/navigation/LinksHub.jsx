import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'
import Menu from '../Menu'

class LinksHub extends Component {
    get componentClassName() {return 'links-hub'}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <img className='svg-image' alt='Standard Chartered' src='/static/images/bc-scb.png'/>
            <i className='material-icons'>apps</i>
            <h3>{this.props.appName} - {this.props.pageTitle}</h3>
        </div>
        <Menu menus={this.props.pageInfo} className='lightgrey-box menus' subMenuClassName='lightgrey-box'/>
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}

export default (new Connect(LinksHub)).klass
