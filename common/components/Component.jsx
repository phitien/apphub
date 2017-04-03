import React from 'react'
import util from '../../core/Util'

export default class Component extends React.Component {
    get util() {return util}
    get mainClassName() {return ''}
    get className() {return `${this.mainClassName} ${this.props.className ? this.props.className : ''}`}
}
