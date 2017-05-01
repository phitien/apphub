import React from 'react'
import Style from './Style'
import Login from './Login'
import Breadcrumbs from './Breadcrumbs'
import ModalDefault from './ModalDefault'

export default class Page extends Style {
    componentClassName = `container-fluid page ${this.props.hideSidebarLeft ? 'has-sidebar-left-collapsed' : 'has-sidebar-left'} ${this.props.hideSidebarRight ? 'has-sidebar-right-collapsed' : 'has-sidebar-right'} ${this.pageClassName}`
    pageClassName = ''

    renderBreadcrumbs = () => <Breadcrumbs breadcrumbs={this.breadcrumbs} actions={this.breadcrumbsActions}/>
    content = () => this.props.children
    children = () =>
        <div className='wrapper'>
            {this.renderBreadcrumbs()}
            {this.content()}
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
