import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import LinksHub from './LinksHub'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import Help  from './Help'
import Notification  from './Notification'
import UserBox from './UserBox'

class Header extends Style {
    componentClassName = 'header'
    onRouteEntered = (route, replace) => this.props.executeLoadPageInfoAction()
    render = () =>
        <div className={this.className}>
            <LinksHub/>
            <LogoBox/>
            <div className='space'/>
            <SearchBox/>
            <Notification/>
            <Help/>
            <UserBox/>
        </div>
}
export default (new Connect(Header)).klass
