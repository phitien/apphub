import React from 'react'
import {Connect} from '../../redux'
import Style from '../Style'
import SelectField from '../SelectField'

class Categories extends Style {
    componentClassName = 'categories'

    get options() {
        return this.props.options ? this.props.options : [
            {value: 'phone', text: 'Phone'},
            {value: 'cars-motors', text: 'Cars & motors'},
            {
                value: 'women-fashion', text: 'Women\'s Fashion',
                options: [
                    {value: 'clothing', text: 'Clothing'},
                    {value: 'bags', text: 'Bags'},
                    {value: 'shoes', text: 'Shoes'},
                ]
            },
            {value: 'men-fashion', text: 'Men\'s Fashion'},
        ]
    }

    children = () => <div className='wrapper'>
        <SelectField options={this.options} placeholder='Categories' searchable={true}/>
    </div>
    render = () => {
        return <div className={this.className}>
            {this.children()}
        </div>
    }
}

export default (new Connect(Categories)).klass
