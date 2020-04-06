import React, { Component } from 'react';

class Form extends Component {
    constructor() 
    {
        super();
        this.state = {  username: "Hello World"};
        //this.myChangeHandler = this.myChangeHandler.bind(this);
       
    }

    myChangeHandler=(event)=>{ //arrow Function : tps d'execution minim par rapport à function
    this.setState({username: event.target.value});
    
  }
    render() {
        return (
            <div>
               <form>
             <input type='text' name='username' onChange={this.myChangeHandler.bind(this)}/>
               </form>
                <p> {this.state.username}</p>
            </div>
        );
    }
}

export default Form;