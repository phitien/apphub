import React from 'react'
import {TextField as MaterialTextField} from 'material-ui'
import Component from './Component'

export default class TextField extends Component {
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
            id: this.util.uuid(), name: '', children: null, rows: 1, rowsMax: 1,
            disabled: false, errorStyle: {}, errorText: null,
            floatingLabelFixed: false, floatingLabelShrinkStyle: {},
            floatingLabelText: null,
            fullWidth: true, hintText: null, multiLine: false, underlineShow: true, type: 'text',
            underlineDisabledStyle: {}, underlineFocusStyle: {},
            floatingLabelFocusStyle: {top: '5px'},
            floatingLabelStyle: this.util.assign({
                backgroundColor: this.backgroundColor, opacity: '.8', top: '10px', left: '0px'
            }, this.paddingLeftRight),
            style: this.util.assign({
                paddingTop: this.paddingTop, paddingBottom: this.paddingBottom,
                display: 'inline-flex', flexDirection: 'column',
            }, this.lineStyle),
            inputStyle: this.util.assign({}, this.paddingLeftRight, {flex: 1, width: 'auto', margin: '0'}),
            textareaStyle: this.util.assign({}, this.paddingLeftRight, {flex: 1, width: 'auto', margin: '0'}),
            hintStyle: this.util.assign({}, this.lineStyle, this.paddingLeftRight, {bottom: '2px', color: this.hintcolor}),
            underlineStyle: {bottom: '0'},
            onChange: () => {},
        }
    }
    render = () => <MaterialTextField {...this.cmpProps}/>
}
