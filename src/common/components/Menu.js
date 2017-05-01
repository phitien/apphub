import React from 'react'
import {Link} from 'react-router'
import Style from './Style'

export default class Menu extends Style {
    level = this.props.level ? this.props.level : 0
    getNodeClassName = (node) => `${location.pathname == node.url ? 'active' : ''} level${this.level} ${node.subNodes && node.subNodes.length > 0 ? 'has-children' : ''}`
    renderMenu = (menus, className, subMenuClassName) => !menus || !menus.length ? null :
        <ul className={className}>{menus.map((item, i) => {
            let props = item.onClick ?
                {onClick: item.onClick} :
                {href: item.url, onClick: (e) => {
                    e.preventDefault();
                    if (item.url) this.util.history.push(item.url)
                }}
            return item.html ?
            <li key={i} className={this.getNodeClassName(item)}>{item.html}</li> :
            <li key={i} className={this.getNodeClassName(item)}>
                <Link {...props}>
                    {item.title}
                    {item.subNodes && item.subNodes.length > 0 ? <i className='material-icons'>chevron_right</i> : null}
                </Link>
                {!item.description ? null :
                <div className='description'>{item.description}</div>}
                <Menu menus={item.subNodes}
                    level={this.level + 1}
                    className={subMenuClassName}
                    subMenuClassName={subMenuClassName}/>
            </li>
            })}
        </ul>
    render = () => this.renderMenu(this.props.menus, this.className, this.props.subMenuClassName)
}
