import './Item.css'; //ici
import  ItemTea from '../tea/Item';//ici
import imagelink1 from "../../assets/img/1.jpg" ;
import imagelink2 from "../../assets/img/2.jpg" ;
import imagelink3 from "../../assets/img/3.jpg" ;
import imagelink4 from "../../assets/img/4.jpg" ;//ici
import { Row, Col } from "react-bootstrap"; //importer row et col de react
import React, {Component} from 'react';


class Item extends Component{  //ici
 
 render(){

  return (
<div style={{border:'2px solid green'}}>
  <Row >
      <Col lg={3} md={3} sm={6} xs={6} style={{display:'inline', border:'2px solid red'}}><ItemTea  imagM= {imagelink1} value1="bla1"  macouleur="red"/></Col>
      <Col lg={3} md={3} sm={6} xs={6} style={{display:'inline',border:'2px solid red'}}><ItemTea  imagM= {imagelink2} value1="bla2"  macouleur="red"/></Col>
      <Col lg={3} md={3} sm={6} xs={6} style={{display:'inline',border:'2px solid red'}}><ItemTea  imagM= {imagelink3} value1="bla3"  macouleur="green"/></Col>
      <Col lg={3} md={3} sm={6} xs={6} style={{display:'inline',border:'2px solid red'}}><ItemTea  imagM= {imagelink4} value1="bla4"  macouleur="green"/></Col>
  </Row>
</div>

  );
}

}
export default Item; //ici