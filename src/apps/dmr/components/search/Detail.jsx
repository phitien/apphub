import React from 'react'
import Component from '../../../../common/components/Component'
import DmrConnect from '../../redux/Connect'

class Detail extends Component {
    get componentClassName() {return 'detail'}
    render = () => <div className={this.className}>
        <code>
            {JSON.stringify(this.props.node)}
        </code>
    </div>
}

export default (new DmrConnect(Detail)).klass
