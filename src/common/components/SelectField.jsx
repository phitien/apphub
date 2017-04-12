import React from 'react'
import {SelectField as MaterialSelectField, MenuItem} from 'material-ui'
import Component from './Component'

export default class SelectField extends Component {
    get componentClassName() {return 'select-field'}
    get height() {return configuration.ui.inputHeight}
    get paddingTop() {return configuration.ui.inputPaddingTop}
    get paddingBottom() {return configuration.ui.inputPaddingBottom}
    get paddingRight() {return configuration.ui.inputPaddingRight}
    get paddingLeft() {return configuration.ui.inputPaddingLeft}
    get fontSize() {return configuration.ui.inputFontSize}
    get backgroundColor() {return configuration.ui.inputBackgroundColor}
    get color() {return configuration.ui.inputColor}
    get hintcolor() {return configuration.ui.inputHintColor}
    get lineStyle() {return {height: this.height, lineHeight: this.height, fontSize: this.fontSize, color: this.color, backgroundColor: this.backgroundColor,}}
    get paddingLeftRight() {return {paddingRight: this.paddingRight, paddingLeft: this.paddingLeft}}

    get cmpProps() {
        return this.util.assignDeep(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            id: this.util.uuid(), name: '', 
            floatingLabelStyle: this.util.assign({
                backgroundColor: this.backgroundColor, opacity: '.8', top: '10px', left: '0px'
            }, this.paddingLeftRight),
            hintStyle: this.util.assign({}, this.lineStyle, this.paddingLeftRight, {bottom: '2px', color: this.hintcolor}),
            iconStyle: {top: '0', padding: '0', height: this.height, width: this.height,},
            labelStyle: this.util.assign({}, this.lineStyle, {top: '0'}),
            listStyle: this.util.assign({}, this.lineStyle),
            menuItemStyle: this.util.assign({}, this.lineStyle),
            menuStyle: this.util.assign({}, {margin: '0'}),
            selectedMenuItemStyle: this.util.assign({}, this.lineStyle, {color: this.backgroundColor, backgroundColor: this.color}),
            style: this.util.assign({}, this.lineStyle, {paddingTop: this.paddingTop, paddingBottom: this.paddingBottom, paddingLeft: this.paddingLeft}),
            underlineDisabledStyle: {bottom: '0', left: '0'}, underlineFocusStyle: {bottom: '0', left: '0'},
            underlineStyle: {bottom: '0', left: '0'},
        }
    }
    render = () =>
        <MaterialSelectField {...this.util.exclude(this.cmpProps, ['source'])} className={this.className}>
            {this.props.children ? this.props.children :
                this.props.source.map((option,i) => <MenuItem {...this.util.assign({key:i}, option)}/>)}
        </MaterialSelectField>
}
