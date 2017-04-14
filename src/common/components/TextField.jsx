import React from 'react'
import {TextField as MaterialTextField} from 'material-ui'
import Style from './Style'

export default class TextField extends Style {
    get componentClassName() {return 'text-field'}
    get themeProps() {return [
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
            floatingLabelFocusStyle: {top: '5px'},
            floatingLabelStyle: this.util.assign({
                top: '10px', left: '0px'
            }, theme.floatingLabelStyle, theme.paddingLeftRightSmall),
            style: this.util.assign({
                display: 'inline-flex', flexDirection: 'column',
            }, theme.lineStyle, theme.paddingTopBottomSmall),
            inputStyle: this.util.assign({}, theme.inputStyle, theme.paddingLeftRightSmall),
            textareaStyle: this.util.assign({}, theme.textareaStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({bottom: '2px'}, theme.hintStyle, theme.lineStyle, theme.paddingLeftRightSmall),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
        }
    }
    render = () => <MaterialTextField {...this.cmpStyleProps} className={this.className}/>
}
