import './Office.css';

import React, {Component} from 'react';
import imagelink1 from "../../assets/img/who.jpg" ;
import imagelink2 from "../../assets/img/what.jpg" ;
import GreenOffice1 from '../../components/greenOffice/GreenOffice' ;

import Head1 from '../../layouts/header/Header' ;
import Foot from '../../layouts/footer/Footer' ;



class Office extends Component{

 render(){

  return (

   <div class="bodyStyle">
       
        <Head1/>
        <row >
         <GreenOffice1 imagM= {imagelink1} valueH4="WHO WE ARE"   valueP="  P1111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo,impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, neque! " />
        </row>
        <row >
          <GreenOffice1  imagM= {imagelink2} valueH4="WHAT WE ARE "  valueP="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepeorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium rationmollitia earum rem. Explicabo,orem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                iusto quos facilis repudiandae excepturi tempore eveniet porro, saepe nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, nemo impedit 
                dolorum itaque reiciendis praesentium ratione mollitia earum rem. Explicabo, neque! " />
        </row>
                
        <Foot/>
     
   </div>
  );
}

}
export default Office ;