import React from 'react'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import {Tabs, Tab} from 'material-ui/Tabs'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

class Detail extends Component {
    get componentClassName() {return 'detail'}
    render = () => <div className={this.className}>
        <Tabs>
            <Tab label='Logical Modal'>
                <Table>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                        >
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      <TableRow>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Unemployed</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                      </TableRow>
                      <TableRow>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                      </TableRow>
                    </TableBody>
                </Table>
            </Tab>
            <Tab label='Physical Modal'></Tab>
        </Tabs>
    </div>
}

export default (new Connect(Detail)).klass
