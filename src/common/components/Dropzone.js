import React from 'react'
import {default as ReactDropzone} from 'react-dropzone'
import Style from './Style'

export default class Dropzone extends Style {
    componentClassName = 'dropzone'
    state = {files: []}

    get files() {return this.state.files}

    open = () => this.dropzone.open()
    drop = (files) => {
        this.setState({files})
        if (this.props.onDropped) this.props.onDropped(this.state.files)
    }
    render = () =>
        <ReactDropzone className={this.className} ref={e => this.dropzone = e} onDrop={this.drop}>
            {this.props.children}
        </ReactDropzone>
}
