import './new.css';
import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <div class="testDIV">
            <h4 >{this.props.valueH4} </h4>
            <img src={this.props.imagM} alt="Sorry no image!"/>
            <h5>{this.props.valueH5}</h5>
            <p>{this.props.valueP}</p>
            <span>A partir de </span><br></br>
            <span>{this.props.valueSPAN2}</span><br></br>
                
            <button type="button" class="btn">
                voir ce produit
            </button>
        </div>     

        );
    }
}

export default New;