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
            floatingLabelStyle: this.util.assign({
                top: '5px', left: '0px',
                fontSize: theme.fontSizeSmall
            }, theme.paddingLeftRightSmall),
            hintStyle: this.util.assign({top: '0', padding: '0'}, theme.lineStyle),
            labelStyle: this.util.assign({top: '0', padding: '0'}, theme.lineStyle),
            iconStyle: this.util.assign({top: '0', border: '0', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', width: theme.lineHeight}, theme.lineStyle),
            menuStyle: this.util.assign({margin: '0', padding: '0'}, theme.lineStyle, theme.paddingLeftRightSmall),
            underlineStyle: this.util.assign({}, theme.underlineStyle),
            style: this.util.assign({
                fontSize: theme.fontSizeSmall
            }, theme.lineStyle),
        }
    }
    render = () =>
    <MaterialSelectField {...this.cmpStyleProps} className={this.className} hintText='asdasd'>
        {this.props.children ? this.props.children :
            this.props.source.map((option,i) => <MenuItem {...this.util.assign({key:i}, option)}/>)}
    </MaterialSelectField>

}
