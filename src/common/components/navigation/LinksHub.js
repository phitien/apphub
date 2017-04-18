import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import Menu from '../Menu'

class LinksHub extends Style {
    get componentClassName() {return 'links-hub'}
    getTitle(nodes, value) {
        return nodes.reduce((value, node) => {
            if (location.pathname == node.url)
                return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title
            if (location.pathname.indexOf(node.url) >= 0)
                return value = node.subNodes && node.subNodes.length ? this.getTitle(node.subNodes, value) : node.title
            return node.subNodes && node.subNodes.length ? this.getAppName(node.subNodes, value) : value
        }, value)
    }
    children = () => <div className='wrapper'>
        <div className='icon'>
            <i className='material-icons'>apps</i>
        </div>
        <Menu menus={this.props.pageInfo.menus} className='lightgrey-box menus' subMenuClassName='lightgrey-box'/>
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
            <img className='svg-image' alt='Standard Chartered' src='/static/images/bc-scb.png'/>
            <h3>
                {this.configuration.appname}
            </h3>
        </div>
    }
}

export default (new Connect(LinksHub)).klass
