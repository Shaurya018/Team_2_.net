import React, { Component } from 'react'

export default class About extends Component {
    style={
        color:'teal',
        padding:10,
        margin:10
    }
    render() {
        return (
            <div >
                <h2 className="tech-preview"style={this.style}>Welcome and thanks for looking out</h2>
                <h2 className="tech-preview"style={this.style}>Learning react JS</h2>
            </div>
        )
    }
}