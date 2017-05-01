import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import Menu from '../Menu'

class LinksHub extends Style {
    componentClassName = 'links-hub'
    getTitle(nodes, value) {
        return nodes.reduce((value, node) => {
            if (location.pathname == node.url)
                return value = node.children && node.children.length ? this.getTitle(node.children, value) : node.title
            if (location.pathname.indexOf(node.url) >= 0)
                return value = node.children && node.children.length ? this.getTitle(node.children, value) : node.title
            return node.children && node.children.length ? this.getAppName(node.children, value) : value
        }, value)
    }
    children = () => <div className='wrapper'>
        <i className='material-icons'>apps</i>
        <Menu menus={this.pageInfo.menus} className='menus' subMenuClassName='sub-menus'/>
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}

export default (new Connect(LinksHub)).klass
