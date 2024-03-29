import React from 'react'
import Component from './Component'

export default class Style extends Component {
    get uuid() {return this.__uuid = !this.__uuid ? this.util.uuid() : this.__uuid}
    get defaultTheme() {
        const theme = this.configuration.ui.theme
        return this.util.assign({id: this.uuid, name: this.uuid}, theme, {
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
            lineStyle: {
                height: theme.lineHeight,
                lineHeight: theme.lineHeight,
            },
            buttonStyle: {
                fontSize: theme.buttonFontSize,
                backgroundColor: theme.buttonBackgroundColor,
                paddingLeft: theme.paddingLeftSmall,
                paddingRight: theme.paddingRightSmall,
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
    get cmpProps() {return this.util.assign({}, this.defaultProps, this.props)}
    get defaultProps() {return {}}
}
