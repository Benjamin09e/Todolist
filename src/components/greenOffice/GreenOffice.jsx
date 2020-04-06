import './GreenOffice.css'; 

import React, {Component} from 'react';

class myOffice extends Component{  
 
 render(){

  return (
    
            <div class="testDIV">
                <h4 >{this.props.valueH4} </h4>
                <img src={this.props.imagM} alt="Sorry no image!"/>
                <p>{this.props.valueP}</p>                            
                <button type="button" class="btn">
                    Read more
                </button>
            </div>     
    

  );
}

}
export default myOffice; 
