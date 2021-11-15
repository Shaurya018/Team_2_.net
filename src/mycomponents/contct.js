import React, { Component } from 'react';
class Contact extends Component {
      style = {
        color: 'teal',
        padding: 10,
        margin:10
    }
    render() {
        return (
            <div align="center">
                <h2 className="tech=preview" style={this.style}>Get In Touch With Us</h2>
                <h2 className="tech=preview" style={this.style}>
                    Mail : React@email.com
                </h2>
            </div>
        );
    }
}
export default Contact;