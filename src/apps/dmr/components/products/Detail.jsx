import React from 'react'
import {Component, Card} from '../../../../common/components'
import {Connect} from '../../redux'

class Detail extends Component {
    get componentClassName() {return 'product'}
    get info() {
        console.log(this.props.info)
        return this.props.info}
    render = () =>
        <Card className='data-element'>
            <div className='output-models'>
                {!this.info.outputModels ? null : this.info.outputModels.map((model,j) =>
                <div key={j} className='output-model'>
                    <div className='model-attributes'>
                        <div className='heading'>{model.name}</div>
                        <div className='description'>{model.description}</div>
                        {!model.attributes ? null : model.attributes.map((attr,k) =>
                        <div key={k} className='model-attribute'>
                            <div className='info'>
                                <div className='name'>{attr.name}</div>
                                <div className='value'>{attr.value}</div>
                            </div>
                            <div className='description'>{attr.description}</div>
                        </div>)}
                    </div>
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
                    {!this.info.interfaces ? null : this.info.interfaces.map((inte,k) =>
                    <tr key={k} className='model-interface'>
                        <td className='model-interface-sourceSystem'>{inte.sourceSystem}</td>
                        <td className='model-interface-sourceProduct'>{inte.sourceProduct}</td>
                        <td className='model-interface-contextName'>{inte.contextName}</td>
                        <td className='model-interface-derivedName'>{inte.derivedName}</td>
                        <td className='model-interface-derivedLogic'>{inte.derivedLogic}</td>
                    </tr>)}
                </tbody>
            </table>
        </Card>
}

export default (new Connect(Detail)).klass
