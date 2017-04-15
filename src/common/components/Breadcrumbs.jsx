import React from 'react'
import {Link} from 'react-router'
import Style from './Style'

export default class Breadcrumbs extends Style {
    get componentClassName() {return 'breadcrumbs'}
    extra = null
    render = () => <div className={this.className}>
        <div className='links'>
            {this.props.breadcrumbs.map((item, i) => <Link key={i} to={item.url} className='breadcrumb'>
                {item.title}
            </Link>)}
        </div>
        {this.extra}
    </div>
}
