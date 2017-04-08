import React from 'react'
import {RaisedButton} from 'material-ui'
import Component from './Component'

class Tabs extends Component {
    get componentClassName() {return 'tabs'}
    state = {
        activeIndex: this.props.activeIndex ? this.props.activeIndex : 0,
    }
    get childCount() {return this.props.children.length}
    get activeIndex() {return this.state.activeIndex}
    handleNext = () => this.activeIndex < this.childCount ? this.setState({activeIndex: this.activeIndex + 1}) : false
    handlePrev = () => this.activeIndex > 0 ? this.setState({activeIndex: this.activeIndex - 1}) : false
    getTitle = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'title' ? v = child.props.children : v
    }, i)
    getContent = (el, i) => el.props.children.reduce((v, child) => {
        return child.type == 'content' ? v = child.props.children : v
    }, i)
    render() {
        return this.childCount ? <div className={this.className}>
            <div className='tabs-header'>
                {this.props.children.map((tab,i) =>
                <RaisedButton key={i} onClick={() => this.setState({activeIndex: i})} label={this.getTitle(tab,i)}
                    className={`tab ${i==this.activeIndex?'active':''}`} primary={i==this.activeIndex}/>)}
            </div>
            <div className='step-content'>
                {this.getContent(this.props.children[this.activeIndex], this.activeIndex)}
            </div>
        </div> : null
    }

}

export default Tabs
