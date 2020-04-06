import './Comp1.css'; //ici

import React, {Component} from 'react';

class Comp1 extends Component{  //ici
 
 render(){

  return (
    <div>
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
    </div>

  );
}

}
export default Comp1; //ici
