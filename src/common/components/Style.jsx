import React from 'react'
import {configuration} from '../../core'
import Component from './Component'

export default class Style extends Component {
    get uuid() {return this.__uuid = !this.__uuid ? this.util.uuid() : this.__uuid}
    get defaultTheme() {
        const theme = configuration.ui.theme
        return this.util.assign({id: this.uuid, name: this.uuid}, theme, {
            colorStyle: {
                color: theme.color,
                backgroundColor: theme.backgroundColor
            },
            reverseColorStyle: {
                color: theme.backgroundColor,
                backgroundColor: theme.color
            },
            paddingLeftRight: {
                paddingLeft: theme.paddingLeft,
                paddingRight: theme.paddingRight
            },
            paddingTopBottom: {
                paddingTop: theme.paddingTop,
                paddingBottom: theme.paddingBottom
            },
            paddingLeftRightSmall: {
                paddingLeft: theme.paddingLeftSmall,
                paddingRight: theme.paddingRightSmall
            },
            paddingTopBottomSmall: {
                paddingTop: theme.paddingTopSmall,
                paddingBottom: theme.paddingBottomSmall
            },
            inputStyle: {
                flex: 1, width: '100%', margin: '0'
            },
            textareaStyle: {
                flex: 1, width: 'auto', margin: '0'
            },
            lineStyle: {
                height: theme.lineHeight,
                lineHeight: theme.lineHeight,
            },
            buttonStyle: {
                fontSize: theme.buttonFontSize,
                paddingLeft: theme.paddingLeftSmall,
                paddingRight: theme.paddingRightSmall,
            },
            textStyle: {
                color: theme.color,
                fontSize: theme.fontSize,
            },
            labelStyle: {
                color: theme.labelColor,
                fontSize: theme.labelFontSize,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            },
            hintStyle: {
                color: theme.hintColor,
                fontSize: theme.fontSizeSmall, fontStyle: 'italic',
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            },
            floatingLabelStyle: {
                color: theme.floatingLabelColor,
                fontSize: theme.floatingLabelFontSize,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            },
            floatingLabelFocusStyle: {
                color: theme.floatingLabelFocusColor,
                fontSize: theme.floatingLabelFontSize,
                display: 'flex', alignItems: 'center', justifyContent: 'flex-start',
            },
            underlineStyle: {bottom: '0', left: '0'},
            underlineFocusStyle: {borderBottomWidth: '1px'},
            tableStyle: {},
            rowStyle: {
                height: 'auto',
                lineHeight: theme.lineHeight,
            },
            cellStyle: {
                margin: '0', padding: `0px ${theme.paddingSmall}`
            },
            breadcrumbsStyle: {
                lineHeight: theme.lineHeight,
            }
        })
    }
    get themeProps() {return []}
    getThemeProps() {return ['id', 'name', 'style'].concat(this.themeProps)}
    get theme() {return this.util.assign({}, this.defaultTheme, this.props)}
    get cmpStyleProps() {return this.util.include(this.util.assign({}, this.theme, this.cmpProps), this.getThemeProps())}
    get cmpProps() {return this.util.assignDeep({}, this.defaultProps, this.props)}
    get defaultProps() {return {}}
}
