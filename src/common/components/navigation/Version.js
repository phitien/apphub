import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class Version extends Style {
    componentClassName = 'version'

    children = () => <div className='wrapper'>
        {this.configuration.appversion}
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}
export default (new Connect(Version)).klass
