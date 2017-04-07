import React from 'react'
import Component from './Component'

export default class Menu extends Component {
    get componentClassName() {return ''}
    renderMenu = (menus, className, subMenuClassName) => !menus || !menus.length ? <ul style={{display: 'none !important'}}></ul> : <ul className={className}>{menus.map((item, i) => {
        let props = item.onClick ? {onClick: item.onClick} : {href: item.url ? item.url : '#'}
        return item.html ? <li key={i} className={`${item.subNodes && item.subNodes.length > 0 ? 'has-children' : ''}`}>{item.html}</li> :
        <li key={i} className={`${item.subNodes && item.subNodes.length > 0 ? 'has-children' : ''}`}>
            <a {...props}>
                {item.title}
                {item.subNodes && item.subNodes.length > 0 ? <i className='material-icons'>chevron_right</i> : null}
            </a>
            {!item.description ? null : <div className='description'>{item.description}</div>}
            <Menu menus={item.subNodes} className={subMenuClassName} subMenuClassName={subMenuClassName}/>
        </li>
        })}
    </ul>
    render = () => this.renderMenu(this.props.menus, this.className, this.props.subMenuClassName)
}
