import './Electro.css';

import React, {Component} from 'react';
import Item from '../../components/tea/Item' ;
import imagelink1 from "../../assets/img/1.jpg" ;
import imagelink2 from "../../assets/img/2.jpg" ;
import imagelink3 from "../../assets/img/3.jpg" ;
import imagelink4 from "../../assets/img/4.jpg" ;

class Electro extends Component{

 render(){

  return (
   <div>
     <Item  imagM= {imagelink1} value1="bla1"  macouleur="red"/>
     <Item  imagM= {imagelink2} value1="bla2 " macouleur="red"/>
     <Item  imagM= {imagelink3} value1="bla3 " macouleur="green"/>
     <Item  imagM= {imagelink4} value1="bla4 " macouleur="green"/>
     <Item  imagM= {imagelink4} value1="bla5 " macouleur="blue"/>
     <Item  imagM= {imagelink4} value1="bla6 " macouleur="blue"/>
   </div>
  );
}

}
export default Electro;