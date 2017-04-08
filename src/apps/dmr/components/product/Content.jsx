import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import Detail from './Detail'

class Content extends Component {
    get componentClassName() {return `content`}
    render = () => <div className={this.className}>
        <Detail/>
    </div>
}

export default (new Connect(Content)).klass
