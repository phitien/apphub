import React from 'react'
import {default as DefaultHighLight} from 'react-highlight'
import Style from './Style'

export default class HighLight extends Style {
    get componentClassName() {return 'javascript'}
    get themeProps() {return [
        'innerHTML', 'element', 'value',
    ]}
    get defaultProps() {
        const theme = this.theme
        return {
            innerHTML: true,
        }
    }
    render = () => <DefaultHighLight {...this.cmpStyleProps} className={this.className}/>
}
