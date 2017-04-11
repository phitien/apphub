import React from 'react'
import {SelectField as MaterialSelectField, MenuItem} from 'material-ui'
import Component from './Component'

export default class SelectField extends Component {
    render = () =>
        <MaterialSelectField {...this.util.exclude(this.props, ['source'])}>
            {this.props.children ? this.props.children :
                this.props.source.map((option,i) => <MenuItem {...this.util.assign({key:i}, option)}/>)}
        </MaterialSelectField>
}
