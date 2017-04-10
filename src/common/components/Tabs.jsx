import React from 'react'
import {RaisedButton} from 'material-ui'
import Component from './Component'

class Tabs extends Component {
    get componentClassName() {return `tabs ${this.cmpProps.vertical ? 'tabs-vertical': 'tabs-horizontal'}`}
    get cmpProps() {
        return this.util.assignDeep(this.defaultProps, this.props)
    }
    get defaultProps() {
        return {
            vertical: false,
            tabStyle: {border: '0'},
            tabLabelStyle: {fontSize: '12px', paddingLeft: '3px', paddingRight: '3px'},
        }
    }
    state = {
        activeIndex: this.cmpProps.activeIndex ? this.cmpProps.activeIndex : 0,
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
        return <div className={this.className} style={{display: !this.childCount ? 'none' : ''}}>
            <div className='tabs-header'>
                {this.props.children.map((tab,i) =>
                <RaisedButton key={i} onClick={() => this.setState({activeIndex: i})} label={this.getTitle(tab,i)}
                    className={`tab ${i==this.activeIndex?'active':''}`} primary={i==this.activeIndex}
                    buttonStyle={this.cmpProps.tabStyle}
                    labelStyle={this.cmpProps.tabLabelStyle}
                    />)}
            </div>
            <div className='tab-content'>
                {this.getContent(this.props.children[this.activeIndex], this.activeIndex)}
            </div>
        </div>
    }

}

export default Tabs
