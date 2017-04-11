import React from 'react'
import {Link} from 'react-router'
import {TableRow, TableRowColumn as TableCell} from 'material-ui/Table'
import Component from '../../../../common/components/Component'
import Connect from '../../redux/Connect'
import Table from '../../../../common/components/Table'
import TextField from '../../../../common/components/TextField'
import Card from '../../../../common/components/Card'
import Tabs from '../../../../common/components/Tabs'

class ProductsList extends Component {
    get componentClassName() {return 'products-list'}
    get data() {return {
        data: this.props.searchDataElementsResults ? this.props.searchDataElementsResults : [],
    }}
    get columns() {return this.props.dataElementColumns}
    componentDidMount() {
        this.props.executeSetDataElementColumnsAction({data: [
            {name: 'ID',field: 'id',width: '40px',optional: true,},
            {name: 'Name',field: 'name',show: true,},
            {name: 'Type',field: 'dataType',show: true,optional: true,},
            {name: 'Description',field: 'description',show: true,optional: true,},
            {name: 'Validation Rule',field: 'validationRule',show: false,optional: true,},
            {name: 'Workflow',field: 'workflow',show: false,optional: true,},
        ]})
    }
    fieldRenderer(row,i,col,j) {
        if (col.field == 'name') return <Link target='_blank' to={`/dmr/product?path=${row.path}`}>{row[col.field]}</Link>
        if (col.field == 'dataType') return <Link>{row[col.field].dataType}</Link>
        return <Link>{row[col.field]}</Link>
    }
    rowDetailRenderer(rowi,i) {return <div className='output-models'>
        {!rowi.outputModels ? null : rowi.outputModels.map((model,j) => <Card key={j} title={`Output: ${model.name}`} subtitle={model.subtitle}>
            <Tabs>
                <tab>
                    <title>Attributes</title>
                    <content>
                        <div className='model-attributes'>
                            {!model.interfaces ? null : model.attributes.map((attr,k) => <div key={k} className='model-attribute'>
                                <div className='model-attribute-info'>
                                    <div className='model-attribute-name'>{attr.name}</div>
                                    <div className='model-attribute-value'>{attr.value}</div>
                                </div>
                                <div className='model-attribute-description'>{attr.description}</div>
                            </div>)}
                        </div>
                    </content>
                </tab>
                <tab>
                    <title>Interfaces</title>
                    <content>
                        <div className='model-interfaces'>
                            {!model.interfaces ? null : model.interfaces.map((inte,k) => <div key={k} className='model-interface'>
                                <div className='model-interface-source-target'>
                                    <div className='model-interface-source'>
                                        <div className='model-interface-derivedName'>{inte.derivedName}</div>
                                    </div>
                                    <div className='model-interface-logic'>
                                        <div className='model-interface-contextName'>{inte.contextName}</div>
                                        <i className='material-icons'>arrow_forward</i>
                                        <div className='model-interface-derivedLogic'>{inte.derivedLogic}</div>
                                    </div>
                                    <div className='model-interface-target'>
                                        <div className='model-interface-sourceSystem'>{inte.sourceSystem}</div>
                                        <div className='model-interface-sourceName'>{inte.sourceProduct}</div>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </content>
                </tab>
            </Tabs>
        </Card>)}
    </div>}
    render = () => <div className={this.className}>
        <div className='view-toolbar'>
            <TextField className='seach-field' hintText='Enter name, description or xpath' fullWidth={true}
                inputStyle={{paddingLeft: '24px', paddingRight: '24px'}}
                hintStyle={{paddingLeft: '24px', paddingRight: '24px'}}
                />
        </div>
        <Table height='420px' fixedHeader={true} fixedFooter={true}
            columns={this.columns.filter(item => item.show)}
            data={this.data.data}
            fieldRenderer={this.fieldRenderer}
            rowDetailRenderer={this.rowDetailRenderer}
        />
    </div>
}

export default (new Connect(ProductsList)).klass
