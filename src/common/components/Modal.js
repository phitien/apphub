import React from 'react'
import {default as ReactModal} from 'react-modal'
import Style from './Style'

export default class Modal extends Style {
    componentClassName = `modal-dialog ${this.modalClassName}`
    modalClassName = ''

    close = () => {}
    message = () => !this.props.message ? null :
        <div className='modal-message'>{this.props.message}</div>
    footer = () => !this.props.footer ? null :
        <div className='modal-footer'>{this.props.footer}</div>
    render = () =>
        <ReactModal {...this.props} className={this.className}>
            {this.message()}
            <div className='modal-content'>
                <div className='modal-header'>
                    {this.props.header}
                    <i className='material-icons icon-close' onClick={this.close}>close</i>
                </div>
                {this.props.children}
                {this.footer()}
            </div>
        </ReactModal>
}
