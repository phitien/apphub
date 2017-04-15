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
            floatingLabelFocusStyle: this.util.assign({}, theme.floatingLabelFocusStyle, theme.lineStyle, theme.paddingLeftRightSmall),
            floatingLabelStyle: this.util.assign({margin: '0', padding: '0', top: '0'}, theme.floatingLabelStyle, theme.lineStyle, theme.paddingLeftRightSmall),
            style: this.util.assign({width: '100%', margin: '0', padding: '0'}, theme.lineStyle),
            inputStyle: this.util.assign({}, theme.inputStyle, theme.paddingLeftRightSmall),
            textareaStyle: this.util.assign({}, theme.textareaStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({width: '100%', whiteSpace: 'nowrap', margin: '0', padding: '0', top: '0'}, theme.hintStyle, theme.lineStyle, theme.paddingLeftRightSmall),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
        }
    }
    render = () => <MaterialTextField {...this.cmpStyleProps} className={this.className}/>
}
