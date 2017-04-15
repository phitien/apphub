import React from 'react'
import HighLight from 'react-highlight'
import {Style, Card} from '../../../../common/components'
import {Connect} from '../../redux'

class Detail extends Style {
    get componentClassName() {return 'product'}
    get info() {return this.props.info}
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
                            <div className='name' title={`${attr.name}: ${attr.value}`}>{attr.name} <span className='value'>{attr.value}</span></div>
                            <div className='description'>{attr.description}</div>
                        </div>)}
                    </div>
                </div>)}
            </div>
            <table className='model-interfaces'>
                <thead>
                    <tr className='model-interface model-interface-header'>
                        <th className='model-interface-sourceSystem'>Source System</th>
                        <th className='model-interface-sourceProduct'>Source Product</th>
                        <th className='model-interface-contextName'>Context</th>
                        <th className='model-interface-derivedName'>Derived Name</th>
                        <th className='model-interface-derivedLogic'>Derived Logic</th>
                    </tr>
                </thead>
                <tbody>
                    {!this.info.interfaces ? null : this.info.interfaces.map((inte,k) =>
                    <tr key={k} className='model-interface'>
                        <td className='model-interface-sourceSystem'>{inte.sourceSystem}</td>
                        <td className='model-interface-sourceProduct'>{inte.sourceProduct}</td>
                        <td className='model-interface-contextName'>{inte.contextName}</td>
                        <td className='model-interface-derivedName'>{inte.derivedName}</td>
                        <td className='model-interface-derivedLogic'>
                            <div className='wrapper'>
                                <HighLight className='javascript hljs'>
                                    {inte.derivedLogic}
                                </HighLight>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </Card>
}

export default (new Connect(Detail)).klass
