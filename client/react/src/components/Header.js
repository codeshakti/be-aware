import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import {Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import "./header.css"

const Header= () => (
<nav className="navbar navbar-default test">
    <div className="navbar-header">
        <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
        </button>
        <a href="#" className="navbar-brand">Brand</a>
    </div>
    <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
            <NavItem href="/Home">Home</NavItem>
            <NavItem href="/contact">Contact</NavItem>
             <NavItem href="/About">About</NavItem>
             <NavItem href="/labour">Labour</NavItem>
        </ul>
        <ul className="nav navbar-nav navbar-right">
            <NavItem href="/Login">Login</NavItem>
            <NavItem href="/SignUp">Signup</NavItem>
        </ul>
    </div>
</nav>
)

export default Header;

