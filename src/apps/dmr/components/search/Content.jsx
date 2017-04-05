import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'
import List from './List'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <List/>
    </div>
}

export default (new DmrConnect(Content)).klass
