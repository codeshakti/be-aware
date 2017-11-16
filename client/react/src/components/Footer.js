import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import "./footer.css"

class Footer extends React.Component {
  render() {
    return (
    	<nav className="navbar navbar-default navbar-fixed-bottom">
    <ul className="nav navbar-nav navbar-right">
      <NavItem href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</NavItem>
      <NavItem href="#"><span className="glyphicon glyphicon-log-in"></span> Login</NavItem>
    </ul>
		</nav>
	)
	}
}	


export default Footer;
