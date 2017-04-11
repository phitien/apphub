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
    fieldRenderer(row,i,col,j) {
        function getAssestClass() {
            let v = ''
            if (row.outputModels) {
                row.outputModels.map(model => v = v ? v : model.attributes.reduce((v,n) => {
                    return v = n.name == 'Asset Class' ? v = n.value : v
                }))
            }
            return v
        }
        function getProduct() {
            let v = ''
            if (row.outputModels) {
                row.outputModels.map(model => v = v ? v : model.attributes.reduce((v,n) => {
                    return v = n.name == 'Product' ? v = n.value : v
                }))
            }
            return v
        }
        // if (col.field == 'name') return <Link target='_blank' to={`/dmr/product?path=${this.util.queries.path}&id=${row.id}`}>{row[col.field]}</Link>
        if (col.field == 'name') return <Link>{row[col.field]}</Link>
        if (col.field == 'assetClass') return <Link>{getAssestClass()}</Link>
        if (col.field == 'product') return <Link>{getProduct()}</Link>
        return <Link>{row[col.field]}</Link>
    }
    rowDetailRenderer(rowi,i) {return <div className='output-models'>
        {!rowi.outputModels ? null : rowi.outputModels.map((model,j) => <Card key={j} title={`${model.name}`} subtitle={model.subtitle}>
            <div className='model-attributes'>
                {!model.interfaces ? null : model.attributes.map((attr,k) => <div key={k} className='model-attribute'>
                    <div className='model-attribute-info'>
                        <div className='model-attribute-name'>{attr.name}</div>
                        <div className='model-attribute-value'>{attr.value}</div>
                    </div>
                    <div className='model-attribute-description'>{attr.description}</div>
                </div>)}
            </div>
            <table className='model-interfaces'>
                <thead>
                    <tr className='model-interface model-interface-header'>
                        <th className='model-interface-source' colSpan={2}>Source</th>
                        <th className='model-interface-contextName'></th>
                        <th className='model-interface-derived' colSpan={2}>Derived</th>
                    </tr>
                    <tr className='model-interface model-interface-header'>
                        <th className='model-interface-sourceSystem'>System</th>
                        <th className='model-interface-sourceProduct'>Product</th>
                        <th className='model-interface-contextName'>Context</th>
                        <th className='model-interface-derivedName'>Name</th>
                        <th className='model-interface-derivedLogic'>Logic</th>
                    </tr>
                </thead>
                <tbody>
                    {!model.interfaces ? null : model.interfaces.map((inte,k) =>
                    <tr key={k} className='model-interface'>
                        <td className='model-interface-sourceSystem'>{inte.sourceSystem}</td>
                        <td className='model-interface-sourceProduct'>{inte.sourceProduct}</td>
                        <td className='model-interface-contextName'>{inte.contextName}</td>
                        <td className='model-interface-derivedName'>{inte.derivedName}</td>
                        <td className='model-interface-derivedLogic'>{inte.derivedLogic}</td>
                    </tr>)}
                </tbody>
            </table>
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
