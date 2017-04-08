import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import Tabs from '../../../../common/components/Tabs'
import Table from '../../../../common/components/Table'

class Detail extends Component {
    get componentClassName() {return 'product'}
    get columns() {return []}
    componentDidMount() {this.props.executeLoadModelDetailAction()}
    render = () => <div className={this.className}>
        <Tabs linear={false}>
            <tab>
                <title>Logical</title>
                <content>TODO Show Logical fields</content>
            </tab>
            <tab>
                <title>Physical</title>
                <content>TODO Show Physical fields</content>
            </tab>
        </Tabs>
    </div>
}

export default (new Connect(Detail)).klass
