import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import LinksHub from './LinksHub'
import Categories from './Categories'
import LogoBox from './LogoBox'
import SearchBox from './SearchBox'
import Notification  from './Notification'
import UserBox from './UserBox'

class Header extends Style {
    componentClassName = 'container header'
    onRouteEntered = (route, replace) => this.props.executeLoadPageInfoAction()
    render = () =>
        <div className={this.className}>
            <LinksHub/>
            <LogoBox/>
            <Categories/>
            <div className='space'/>
            <SearchBox/>
            <Notification/>
            <UserBox/>
        </div>
}
export default (new Connect(Header)).klass
