import React from 'react'
import Component from '../Component'
import LinksHub from './LinksHub'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import UserBox from './UserBox'
import Notification  from './Notification'

export default class Header extends Component {
    get mainClassName() {return 'header'}
    render() {
        return <div className={this.className}>
            <LinksHub/>
            <LogoBox/>
            <SearchBox/>
            <Notification/>
            <UserBox/>
        </div>
    }
}
