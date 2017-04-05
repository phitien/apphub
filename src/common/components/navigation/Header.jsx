import React from 'react'
import Component from '../Component'
import Connect from '../../redux/Connect'
import LinksHub from './LinksHub'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import Help  from './Help'
import Notification  from './Notification'
import UserBox from './UserBox'

class Header extends Component {
    get componentClassName() {return 'dark-box header'}
    render = () => <div className={this.className}>
        <LinksHub/>
        <LogoBox/>
        <SearchBox/>
        <Notification/>
        <UserBox/>
        <Help/>
    </div>
}
export default (new Connect(Header)).klass
