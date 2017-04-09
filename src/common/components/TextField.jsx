import React from 'react'
import {TextField as MaterialTextField} from 'material-ui'
import Component from './Component'

export default class TextField extends Component {
    get cmpProps() {
        return this.util.assignDeep(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            id: '', name: '', children: null, rows: 1, rowsMax: 1,
            defaultValue: null, value: null, disabled: false, errorStyle: {}, errorText: null,
            floatingLabelFixed: false, floatingLabelShrinkStyle: {},
            floatingLabelStyle: {}, floatingLabelText: null,
            fullWidth: true, hintText: null, multiLine: false,
            type: 'text', underlineDisabledStyle: {}, underlineFocusStyle: {}, underlineShow: true,
            style: {height: '24px', fontSize: '12px'}, inputStyle: {}, textareaStyle: {},
            hintStyle: {bottom: '0'}, underlineStyle: {bottom: '0'}, floatingLabelFocusStyle: {},
            onChange: () => {},
        }
    }
    render = () => <MaterialTextField {...this.cmpProps}/>
}
