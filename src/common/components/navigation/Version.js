import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'

class Version extends Style {
    componentClassName = 'version'
    render = () => <div className={this.className}>
        Version {this.pageInfo.version ? this.pageInfo.version : this.configuration.version}
    </div>
}
export default (new Connect(Version)).klass
