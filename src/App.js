import './App.css';
import MyVar from './variables/VariablesFR.jsx' ;

import React, {Component} from 'react';

class App extends Component{

  constructor() {
    super();
    this.state = { mycolor: "red", Ptext: "Hello World", SPANtext: 0 };
    this.changeColor = this.changeColor.bind(this);
  }
 /*changeColor(){
    
    this.setState({mycolor: "green" , Ptext:"Texte apres le click!", SPANtext:this.state.SPANtext+3 });
  }*/
  changeColor=()=>{ //arrow Function : tps d'execution minim par rapport à function
    this.setState({mycolor: "green" , Ptext:"Texte apres le click!", 
    SPANtext:this.state.SPANtext + (Math.floor(Math.random()*5+6)) });
  }
 render(){

  return (
   <div class="App">
     <button onClick={this.changeColor}>Submit</button>
     <p style={{color:this.state.mycolor}}> {this.state.Ptext}</p>
     <span>{this.state.SPANtext}</span>
     <p>{MyVar.mytext.textHello}</p>
    <span>todoliste</span>
   </div>
  );
}

}
export default App;
