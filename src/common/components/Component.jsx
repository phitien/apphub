import React from 'react'
import util from '../../core/util'

export default class Component extends React.Component {
    get util() {return util}
    get componentClassName() {return ''}
    get className() {return `${this.componentClassName} ${this.props.className}`}
}
