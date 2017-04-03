import React from 'react'
import Component from '../Component'
import LinksHub from './LinksHub'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import Notification  from './Notification'
import UserBox from './UserBox'

export default class Header extends Component {
    get componentClassName() {return 'header'}
    render = () => <div className={this.className}>
        <LogoBox/>
        <LinksHub/>
        <SearchBox/>
        <Notification/>
        <UserBox/>
    </div>
}
