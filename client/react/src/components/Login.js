import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './Login.css'



class Login extends React.Component {
  render() {
    return (
    	
    <div className="omb_login">
    	<h3 className="omb_authTitle">Login<NavItem href="/Sign up">Sign up</NavItem></h3>
		<div className="row omb_row-sm-offset-3 omb_socialButtons">
    	    <div className="col-xs-4 col-sm-2">
		        <NavItem href="#" className="btn btn-lg btn-block omb_btn-facebook">
			        <i className="fa fa-facebook visible-xs"></i>
			        <span className="hidden-xs">Facebook</span>
		        </NavItem>
	        </div>
        	<div className="col-xs-4 col-sm-2">
		        <NavItem href="#" className="btn btn-lg btn-block omb_btn-twitter">
			        <i className="fa fa-twitter visible-xs"></i>
			        <span className="hidden-xs">Twitter</span>
		        </NavItem>
	        </div>	
        	<div className="col-xs-4 col-sm-2">
		        <NavItem href="#" className="btn btn-lg btn-block omb_btn-google">
			        <i className="fa fa-google-plus visible-xs"></i>
			        <span className="hidden-xs">Google+</span>
		        </NavItem>
	        </div>	
		</div>

		<div className="row omb_row-sm-offset-3 omb_loginOr">
			<div className="col-xs-12 col-sm-6">
				<hr className="omb_hrOr"/>
				<span className="omb_spanOr">or</span>
			</div>
		</div>

		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-6">	
			    <form className="omb_loginForm" action="" autocomplete="off" method="POST">
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-user"></i></span>
						<input type="text" className="form-control" name="username" placeholder="email address"></input>
					</div>
					<span className="help-block"></span>
										
					<div className="input-group">
						<span className="input-group-addon"><i className="fa fa-lock"></i></span>
						<input  type="password" className="form-control" name="password" placeholder="Password"></input>
					</div>
                    <span className="help-block">Password error</span>

					<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
				</form>
			</div>
    	</div>
		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-3">
				<label className="checkbox">
					<input type="checkbox" value="remember-me"/>Remember Me
				</label>
			</div>
			<div className="col-xs-12 col-sm-3">
				<p className="omb_forgotPwd">
					<NavItem href="#">Forgot password?</NavItem>
				</p>
			</div>
		</div>	    	
	</div>

	)
}
}

export default Login;