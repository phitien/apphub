import React from 'react'
import {configuration} from '../../../core'
import {Connect} from '../../redux'
import Style from '../Style'

class Version extends Style {
    get componentClassName() {return 'version'}
    render = () => <div className={this.className}>
        Version {this.props.pageInfo.version ? this.props.pageInfo.version : configuration.version}
    </div>
}
export default (new Connect(Version)).klass
