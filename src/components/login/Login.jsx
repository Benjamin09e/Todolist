import './login.css';
import React, { Component } from 'react';
import imagelink1 from "../../assets/img/wave.png" ;
import imagelink2 from "../../assets/img/bg.svg" ;
import imagelink3 from "../../assets/img/avatar.svg";



class Login extends Component {
    render() {
        return (
            <header>
             
	<div className="container">
		
		<div className="login-content">
			<form action="index.html">
				
				<h2 className="title">Welcome</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Username</h5>
           		   		<input type="text" className="input"/>
           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
           		    	<input type="password" className="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" className="btn" value="Login"/>
            </form>
        </div>
    </div>

            </header>
        );
    }
}

export default Login;