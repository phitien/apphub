import React from 'react'
import {Link} from 'react-router'
import Style from './Style'

export default class Breadcrumbs extends Style {
    componentClassName = 'breadcrumbs'
    render = () =>
        <div className={this.className}>
            <div className='links'>
                {this.breadcrumbs.map((item, i) => <Link key={i} to={item.url} className='breadcrumb'>
                    {item.title}
                </Link>)}
            </div>
            <div className='actions'>{this.breadcrumbsActions}</div>
        </div>
    }
