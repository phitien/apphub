import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class LinksHub extends Component {
    init() {this.state = {showMenu: false}}
    get componentClassName() {return 'links-hub'}
    get menus() {return this.props.menus}
    get addMenus() {return this.props.addMenus}
    componentDidMount = () => {
        this.util.query('/public/api/menus.json', null, {
            success: (res) => {
                this.addMenus({data: res.data})
            }
        })
    }
    renderMenu = (menus) => {return !menus || menus.length <= 0 ? null :
        <ul className='grey-box menus'>{menus.map((item, i) =>
            <li key={i} className={`${item.children && item.children.length > 0 ? 'has-children' : ''}`}>
                <a>
                    {item.title}
                    {item.children && item.children.length > 0 ? <i className='material-icons'>chevron_right</i> : null}
                </a>
                {!item.description ? null : <div className='description'>{item.description}</div>}
                {this.renderMenu(item.children)}
            </li>)}
        </ul>
    }
    children = () => <div className='children'>
        <div className='icon'>
            <i className='material-icons'>apps</i>
            Menu
        </div>
        {this.renderMenu(this.menus)}
    </div>
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}

export default (new Connect(LinksHub)).klass
