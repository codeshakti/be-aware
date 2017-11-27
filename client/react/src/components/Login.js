import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './Login.css'
import Header from "./Header"
import Footer from "./Footer"



class Login extends React.Component {
  render() {
    return (
    	<div class="custom_body">
    	<Header/>
    		<div class="container">
    			<div class="row">
    	    
    	   			 <div class="login_box">
    	        	<section class="main-box">
        	        <form>
        	        <div class="input-box">
            	        <span class="input-group-addon i_icon"><i class="glyphicon glyphicon-user"></i></span>
                        <input id="email" type="text" class="form-control input_layout" name="email" placeholder="Email"/>
                    </div>
                    <div class="input-box">
            	         <span class="input-group-addon i_icon"><i class="glyphicon glyphicon-lock"></i></span>
                         <input id="password" type="password" class="form-control input_layout" name="password" placeholder="Password"/>
                    </div>
                    </form>
                    <button type="submit" class="btn btn-lg btn-primary btn-block signup-btn">LOGIN</button>
                </section>    
    	    </div>
    	</div>
    </div>
     <Footer/>
</div>    
	)
}
}

export default Login;