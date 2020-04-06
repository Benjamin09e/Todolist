import './Item.css'; 

import React, {Component} from 'react';

class Item extends Component{  
 
 render(){

  return (
  <a href="#">
    <img src={this.props.imagM} alt="Sorry  Pas dimage"/>
    <h3 style={{color:this.props.macouleur}}>{this.props.value1} </h3>
  </a>

  );
}

}
export default Item; //ici
