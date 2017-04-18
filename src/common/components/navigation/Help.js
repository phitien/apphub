import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class Help extends Style {
    get componentClassName() {return 'help'}
    children = () => <div className='wrapper'>
        <div className='icon'>
            <i className='material-icons'>help</i>
        </div>
    </div>
    render = () =>
        <div className={this.className}>
            {this.children()}
        </div>
}

export default (new Connect(Help)).klass
