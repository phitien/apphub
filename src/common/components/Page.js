import React from 'react'
import Style from './Style'
import Login from './Login'
import Breadcrumbs from './Breadcrumbs'
import ModalDefault from './ModalDefault'

export default class Page extends Style {
    componentClassName = `container-fluid page ${this.sidebarLeftClassName} ${this.sidebarRightClassName} ${this.pageClassName}`
    pageClassName = ''

    get sidebarLeftClassName() {
        if (!this.props.sidebarLeft) return ''
        return this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'
    }
    get sidebarRightClassName() {
        if (!this.props.sidebarRight) return ''
        return this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'
    }

    renderSibarLeft = () => this.props.sidebarLeft
    renderSibarRight = () => this.props.sidebarRight
    renderBreadcrumbs = () => <Breadcrumbs breadcrumbs={this.breadcrumbs} actions={this.breadcrumbsActions}/>
    content = () => this.props.children
    children = () =>
        <div className='wrapper'>
            {this.renderBreadcrumbs()}
            {this.renderSibarLeft()}
            {this.content()}
            {this.renderSibarRight()}
        </div>
    renderModal = () => !this.props.modal ? null : this.props.modal instanceof Modal ? this.props.modal :
        <ModalDefault isOpen={true} contentLabel='ModalDefault'>
            {this.props.modal}
        </ModalDefault>
    render = () =>
        <div className={this.className}>
            {this.util.user.isLogged ? this.children() : <Login/>}
            {this.renderModal()}
        </div>
}
