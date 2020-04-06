import './Prod1.css';

import React, {Component} from 'react';
import Comp1 from '../../components/comp1/Comp1' ;
import imagelink1 from "../../assets/img/product1.jpg" ;
import imagelink2 from "../../assets/img/product2.jpg" ;
import imagelink3 from "../../assets/img/product3.jpg" ;

class Prod1 extends Component{

 render(){

  return (
   <div>
     <Comp1  imagM= {imagelink1} valueH4="Notre nouveauté"  valueH5="The de hammam" valueP="  P1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, neque! " valueSPAN2="8.50£"/>

     <Comp1  imagM= {imagelink2} valueH4="Notre beste-seller " valueH5="Infusion herboriste" valueP="  P22222 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, neque! " valueSPAN2="7.60£"/>
                
     <Comp1  imagM= {imagelink3} valueH4="Notre coup de coeur " valueH5="Blue of london" valueP="  P33333 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, neque! " valueSPAN2="9.00£"/>
     
   </div>
  );
}

}
export default Prod1;