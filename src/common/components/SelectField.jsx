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
            floatingLabelStyle: this.util.assign({top: '10px', left: '0px'}, theme.floatingLabelStyle, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({bottom: '2px'}, theme.hintStyle, theme.paddingLeftRightSmall),
            labelStyle: this.util.assign({top: '0'}, theme.labelStyle),
            iconStyle: {top: '0', padding: '0', height: theme.lineHeight, width: theme.lineHeight},
            menuItemStyle: this.util.assign({}, theme.lineStyle),
            menuStyle: {margin: '0'},
            selectedMenuItemStyle: this.util.assign({}, theme.lineStyle, theme.reverseColorStyle),
            style: this.util.assign({}, theme.lineStyle, theme.paddingTopBottom),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
        }
    }
    render = () =>
        <MaterialSelectField {...this.cmpStyleProps} className={this.className}>
            {this.props.children ? this.props.children :
                this.props.source.map((option,i) => <MenuItem {...this.util.assign({key:i}, option)}/>)}
        </MaterialSelectField>
}
