
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
	<div className="content">
    	<footer id="myFooter">
        	<div className="container">
		            <ul>
		                <li><a href="#">Company Information</a></li>
		                <li><a href="/contact">Contact us</a></li>
		                <li><a href="/Reviews">Reviews</a></li>
		                <li><a href="/Terms">Terms of service</a></li>
		            </ul>
        <p className="footer-copyright">© 2017 Copyright Text</p>
    </div>
        <div className="footer-social">
            <a href="#" className="social-icons"><i className="fa fa-facebook"></i></a>
            <a href="#" className="social-icons"><i className="fa fa-google-plus"></i></a>
            <a href="#" className="social-icons"><i className="fa fa-twitter"></i></a>
        </div>
    </footer>
 </div>
	)
	}
}	


export default Footer;


