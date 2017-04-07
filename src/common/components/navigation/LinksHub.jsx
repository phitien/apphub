import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'

class LinksHub extends Component {
    get componentClassName() {return 'links-hub'}
    componentDidMount() {this.props.loadPageInfo()}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <i className='material-icons'>apps</i>
            Apps
        </div>
        {this.renderMenu(this.props.pageInfo.menus, 'lightgrey-box menus')}
    </div>
    render = () => <div className={this.className}>
        {this.children()}
    </div>
}

export default (new Connect(LinksHub)).klass
