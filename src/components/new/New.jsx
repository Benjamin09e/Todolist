import './new.css';
import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
         <li class={this.props.myclass}>{this.props.text}></li>
        );
    }
}

export default New;