import React from 'react'
import {Connect} from '../redux'
import Modal from './Modal'

class ModalDefault extends Modal {
    modalClassName = 'default-modal'

    close = () => this.props.executeRemoveModalFromViewAction()
}
export default (new Connect(ModalDefault)).klass
