import React from 'react'
import {SelectField as MaterialSelectField, MenuItem} from 'material-ui'
import Style from './Style'

export default class SelectField extends Style {
    get componentClassName() {return 'select-field'}
    get themeProps() {return [
        'autoWidth', 'children', 'disabled', 'errorStyle',
        'errorText', 'floatingLabelFixed', 'floatingLabelStyle', 'floatingLabelText',
        'fullWidth', 'hintStyle', 'hintText', 'iconStyle',
        'labelStyle', 'listStyle', 'maxHeight', 'menuItemStyle',
        'menuStyle', 'multiple', 'onChange', 'selectedMenuItemStyle',
        'selectionRenderer', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineStyle',
        'value',
    ]}
    get defaultProps() {
        const theme = this.theme
        return {
            floatingLabelStyle: this.util.assign({top: '5px', left: '0px'}, theme.floatingLabelStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({top: '0', padding: '0'}, theme.lineStyle, theme.hintStyle, theme.paddingLeftRightSmall),
            labelStyle: this.util.assign({top: '0', padding: '0'}, theme.lineStyle, theme.labelStyle, theme.paddingLeftRightSmall),
            iconStyle: this.util.assign({top: '0', border: '0', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: theme.lineHeight}, theme.lineStyle),
            menuItemStyle: this.util.assign({}, theme.lineStyle),
            menuStyle: this.util.assign({margin: '0', padding: '0'}, theme.lineStyle, theme.paddingLeftRightSmall),
            selectedMenuItemStyle: this.util.assign({}, theme.lineStyle, theme.reverseColorStyle),
            style: this.util.assign({}, theme.lineStyle),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
        }
    }
    render = () =>
    <MaterialSelectField {...this.cmpStyleProps} className={this.className} hintText='asdasd'>
        {this.props.children ? this.props.children :
            this.props.source.map((option,i) => <MenuItem {...this.util.assign({key:i}, option)}/>)}
    </MaterialSelectField>

}
