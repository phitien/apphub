import React from 'react'
import {TextField as MaterialTextField} from 'material-ui'
import Style from './Style'

export default class TextField extends Style {
    get componentClassName() {return 'text-field'}
    get themeProps() {return [
        'min', 'max', 'step', 'placeholder',
        'children', 'defaultValue', 'disabled', 'errorStyle',
        'errorText', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelShrinkStyle',
        'floatingLabelStyle', 'floatingLabelText',
        'fullWidth', 'hintStyle', 'hintText', 'inputStyle',
        'multiLine', 'onChange', 'rows', 'rowsMax',
        'textareaStyle', 'type', 'underlineDisabledStyle', 'underlineFocusStyle',
        'underlineShow', 'underlineStyle', 'value',
    ]}
    get defaultProps() {
        const theme = this.theme
        return {
            floatingLabelFixed: true,
            floatingLabelStyle: this.util.assign({
                margin: '0', padding: '0', top: '0',
            }, theme.lineStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({
                width: '100%', whiteSpace: 'nowrap', margin: '0', padding: '0', top: '2px',
            }, theme.lineStyle, theme.paddingLeftRightSmall),
            inputStyle: this.util.assign({
                width: '100%', margin: '0', padding: '0',
            }, theme.inputStyle, theme.paddingLeftRightSmall),
            style: this.util.assign({
                width: '100%', margin: '0', padding: '0',
                fontSize: theme.fontSize
            }, theme.lineStyle),
        }
    }
    render = () => <MaterialTextField {...this.cmpStyleProps} className={this.className}/>
}
