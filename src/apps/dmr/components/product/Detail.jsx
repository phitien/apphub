import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import Tabs from '../../../../common/components/Tabs'
import Table from '../../../../common/components/Table'
import Card from '../../../../common/components/Card'

class Detail extends Component {
    get componentClassName() {return 'product'}
    get columns() {return []}
    componentDidMount() {this.props.executeLoadModelDetailAction()}
    render = () => <div className={this.className}>
        <Tabs linear={false}>
            <tab>
                <title>Logical</title>
                <content>
                    <Card title='Logical Model' subtitle='Logical model fields'>
                        TODO Show Logical fields
                    </Card>
                </content>
            </tab>
            <tab>
                <title>Physical</title>
                <content>
                    <Card title='Physical Model'>
                        TODO Show Physical fields
                    </Card>
                </content>
            </tab>
        </Tabs>
    </div>
}

export default (new Connect(Detail)).klass
